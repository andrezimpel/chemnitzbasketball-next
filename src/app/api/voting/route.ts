import { PrismaClient, Vote } from '@prisma/client'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

const courtData = [
  { value: "1", file: '01.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "2", file: '02.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "3", file: '03.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "4", file: '04.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "5", file: '05.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "6", file: '06.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "7", file: '07.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." },
  { value: "8", file: '08.png', description: "Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function." }
]

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email') || ''

  const res = await fetch("https://api.ipify.org?format=json")
  const _res = await res.json()
  console.log({ _res })

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

  return NextResponse.json({ user, votedToday: checkedVotedToday(user?.votes), courtData })
}

export async function POST(request: Request) {
  const { email, design, namespace = 'default' } = await request.json()

  console.log({ r: request.headers })

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
    const transporter = nodemailer.createTransport({
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
      to: 'andrezimpel@me.com',
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