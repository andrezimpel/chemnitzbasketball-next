'use client'

import Marquee from "react-fast-marquee"

export interface Message {
  age: number
  message: string
  name: string
}

export default function Messages({ chunks }: { chunks: Message[][] }) {
  const speeds = [70, 60, 65, 50, 55, 45]

  return (
    <div className="space-y-4">
      {chunks.map((chunk, i) => (
        <Marquee
          key={i}
          speed={speeds[i]}
          gradient={false}
          pauseOnHover={true}
        >
          <div className="flex space-x-4">
            {chunk.map((message, j) => (
              <div key={j} className="rounded-md bg-purple-800 text-purple-50 p-4 font-overpass flex flex-col justify-center">
                <div className="max-w-sm md:max-w-xl">{message.message}</div>
                <div className="text-sm text-purple-300">- {message.name}{message.age && `(${message.age})`}</div>
              </div>
            ))}
          </div>
        </Marquee>
      ))}
    </div>
  )
}