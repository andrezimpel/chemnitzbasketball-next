import { PrismaClient, Vote } from '@prisma/client'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

const courtData = [
  {
    value: "1",
    file: '01.png',
    description: 'Auf dem Brühl steht ein großes "Zuhause". Der neue Court soll ein Zuhause für alle die Basketball lieben werden. Seine abstrakten Formen greifen die Spiellinien auf und bilden das Wort "Home". Er soll dafür sorgen, dass sich Menschen verbinden.'
  },
  {
    value: "2",
    file: '02.png',
    description: "Schon von Weitem ist der Basketballplatz kaum zu übersehen. Die sich überschneidenden Kreise repräsentieren die Begegnungspunkte, die sich zwischen verschiedenen Kulturen und Generationen auf dem Platz bilden. Die lebhaften und kräftigen Farben fallen unmittelbar ins Blickfeld und erfassen die Dynamik des Stadtlebens sowie des Basketballspiels."
  },
  {
    value: "3",
    file: '03.png',
    description: 'Basketball ist ein Sport, der Jugend, Fashion, Musik und ganze Kulturen begeistert. Mit diesem Design wollten wir das in unserer Gestaltung ausdrücken. Wir möchten die Gemeinschaft Chemnitz hervorheben, und etwas erschaffen, was die Basketball Community miteinbezieht, und womit sich jede*r identifizieren kann.'
  },
  {
    value: "4",
    file: '04.png',
    description: 'Das Design zeigt die starke Verbindung von Basketball, urbanem Streetstyle und der Hiphop-Kultur. Mit Formen, die an Graffitis erinnern, entsteht eine unglaubliche Dynamik, die die Bedeutung und Werte der weltweiten Subkultur betont.'
  },
  {
    value: "5",
    file: '05.png',
    description: "Organische Formen treffen auf prägnante Farben. Starke Kontraste, für ein spannendes und optisch klares Spielerlebnis."
  },
  {
    value: "6",
    file: '06.png',
    description: "Inspiriert wurde das Design vom taktischen Positionsspiel im Basketball. Der Basketballsport enthält dynamische Bewegungen und Abläufe. In unserer Gestaltung nehmen direkt Bezug darauf. Jede Teamseite ist hierbei optisch gut erkennbar."
  },
  {
    value: "7",
    file: '07.png',
    description: 'Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function.'
  },
  {
    value: "8",
    file: '08.png',
    description: 'Ein modernes und klares Design. Es verkörpert das Sprichwort "weniger ist mehr" und überzeugt mit seinem Interpretationsspielraum.'
  }
]

const MAX_DAILY_VOTES = 5

function checkedVotedToday(votes: Vote[] = []) {
  const today = new Date()

  const arr = votes.map(vote => {
    const createdAt = new Date(vote.createdAt)
    return createdAt.getDate() === today.getDate() &&
      createdAt.getMonth() === today.getMonth() &&
      createdAt.getFullYear() === today.getFullYear()
  })

  return arr.includes(true)
}

async function getIpVotes(ip: string) {
  const now = new Date()
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

  return await prisma.vote.findMany({
    where: {
      ipAddress: ip,
      createdAt: {
        gte: startOfToday,
        lt: endOfToday
      }
    }
  })
}

export async function GET(request: Request) {
  const shuffledCourtData = courtData.sort(() => 0.5 - Math.random())
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email') || ''

  const headersList = headers()
  const ip = headersList.get('x-ip-from-middleware')

  const ipVotes = await getIpVotes(ip)

  if (ipVotes.length > MAX_DAILY_VOTES) {
    return NextResponse.json({ votedToday: true, courtData: shuffledCourtData }, { status: 403 })
  }

  const user = await prisma.user.findUnique({
    where: {
      email
    },
    include: {
      votes: {
        include: {
          voteOptions: true
        }
      }
    }
  })

  return NextResponse.json({ user, votedToday: checkedVotedToday(user?.votes), courtData: shuffledCourtData })
}

export async function POST(request: Request) {
  const { email, design, namespace = 'default' } = await request.json()

  const headersList = headers()
  const ip = headersList.get('x-ip-from-middleware')

  const ipVotes = await getIpVotes(ip)

  if (ipVotes.length > MAX_DAILY_VOTES) {
    return NextResponse.json({ votedToday: true }, { status: 403 })
  }

  const _user = await prisma.user.findUnique({
    where: {
      email
    },
    include: {
      votes: {
        include: {
          voteOptions: true
        }
      }
    }
  })

  const hasVoteToday = checkedVotedToday(_user?.votes)

  if (hasVoteToday) return NextResponse.json({ user: _user, votedToday: true })

  const voteOptions = design.map(val => {
    return { value: val }
  })

  const votes = {
    create: {
      ipAddress: ip,
      namespace: namespace,
      voteOptions: {
        create: voteOptions
      }
    }
  }

  const user = await prisma.user.upsert({
    where: {
      email
    },
    update: {
      email,
      votes
    },
    create: {
      email,
      votes
    },
    include: {
      votes: {
        include: {
          voteOptions: true
        }
      }
    }
  })

  if (!user.emailVerified) {
    const transporter = await nodemailer.createTransport({
      host: "mail-de.maxcluster.net",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    const text = `
Damit deine Stimme(n) zählen, müssen wir deine E-Mail-Adresse bestätigen. Klicke dazu einfach auf den folgenden Link:
\n
${process.env.BASE_URL}/voting/verify/${user.emailVerificationToken}
\n
Vielen Dank für deine Teilnahme!
Chemnitz Basketball
    `

    let mailOptions = {
      from: 'CHEMNITZ BASKETBALL <contact@chemnitzbasketball.com>',
      to: user.email,
      subject: 'Bitte bestätige deine E-Mail-Adresse',
      text
    }

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    console.log("send verification email now")
  }

  return NextResponse.json({ user, votedToday: false })
}