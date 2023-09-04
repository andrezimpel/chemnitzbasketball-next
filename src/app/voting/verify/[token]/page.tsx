import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

async function verifyUser(token: string) {
  const user = await prisma.user.update({
    where: {
      emailVerificationToken: token
    },
    data: {
      emailVerified: new Date(),
      updatedAt: new Date(),
    }
  })
  return user
}

export default async function VotingVerification({ params: { token } }: { params: { token: string } }) {
  const user = await verifyUser(token)
  return (
    <div className="container max-w-4xl mx-auto px-4 mt-8 font-overpass">
      <div className="impressum space-y-8">
        <div className="uppercase space-y-3 md:space-y-6 mb-8 font-akzidenz">
          <div>
            <h1 className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Danke</h1>
          </div>
        </div>
        <div className='space-y-4'>
          <p>Deine E-Mail-Adresse <u>{user.email}</u> wurde verifiziert. Deine Stimmen werden mit gezählt.</p>
          <p>🏀🖤🤎❤️🧡💛💚💙💜🤍</p>
        </div>
        <div>
          <Link className='underline hover:text-purple-200' href="/">Zurück zur Startseite</Link>
        </div>
      </div>
    </div>
  )
}