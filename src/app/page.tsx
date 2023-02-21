import About from './about'
import Architecture from './architecture'
import Event from './event'
import Faq from './faq'
import Messages, { Message } from './messages'

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
      <Event />
      <Messages chunks={data} />
      <Architecture />
      <About />
      <Faq />
    </div>
  )
}