import type { Metadata } from 'next'
import About from '../components/about'
import Architecture from '../components/architecture'
import DesignVoting from '../components/design-voting'
import Event from '../components/event'
import Faq from '../components/faq'
import Invitations from '../components/invitations'
import Messages, { Message } from '../components/messages'

export const metadata: Metadata = {
  title: 'Startseite | CHEMNITZ BASKETBALL',
  description: '...',
}

function splitToChunks(array: Message[], parts: number) {
  let result = []
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)))
  }
  return result
}

async function getMessages() {
  // fetch from graphql endpoint
  const res = await fetch('https://api.chemnitzbasketball.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          messages {
            age
            message
            name
          }
        }
      `
    })
  })
  const { data } = await res.json()
  return splitToChunks(data?.messages.filter((m: Message) => m.message.length < 180).sort((a: Message, b: Message) => (a.message.length > b.message.length) ? 1 : -1), 6)
}

export default async function IndexPage() {
  const data = await getMessages()

  return (
    <div className="space-y-8 md:space-y-14">
      <DesignVoting />
      <Messages chunks={data} />
      <Architecture />
      <About />
      <Invitations />
      <Event />
      <Faq />
    </div>
  )
}