import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

function checkedVotedToday(votes = []) {
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
  const email = searchParams.get('email')

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

  return NextResponse.json({ user, votedToday: checkedVotedToday(user?.votes) })
}

export async function POST(request: Request) {
  const { email, design, namespace = 'default' } = await request.json()

  console.log({ request })

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

  return NextResponse.json({ user, votedToday: false })
}