import VideoPlayer from "./video-player"

interface Invitation {
  title: string
  id: string
  name: string
}

const invitations: Invitation[] = [
  {
    title: "Einladung Nelson Weidemann",
    id: "k9F0iEY8yjg",
    name: "Nelson Weidemann"
  },
  {
    title: "Einladung Aher Uguak",
    id: "omie5UnJCKQ",
    name: "Aher Uguak"
  },
  {
    title: "Einladung Kevin Yebo",
    id: "xGLoB4Ao2Zk",
    name: "Kevin Yebo"
  },
  {
    title: "Einladung Andre Zimpel",
    id: "SRO1t7sS3nU",
    name: "Andre Zimpel"
  }
]

export default function Invitations() {
  return (
    <div className="my-12 space-y-6">
      <div className="container max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="inline font-bold bg-purple-500 text-lg md:text-xl uppercase">Unterstützer:innen</h2>
        <div className="space-y-2 font-overpass md:text-justify">
          <p className="md:text-lg">Seit dem Projektstart vor drei Jahren gab es sehr viel positives Feedback. Ohne euch wären wir nie so weit gekommen. Lasst uns gemeinsam den letzten Schritt gehen, lasst uns der Stadtverwaltung zeigen wie viele wir sind und das wir den neuen Platz wollen.</p>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto px-4 gap-4 md:gap-10 flex justify-between md:justify-around flex-wrap">
        {invitations.map(({ id, title, name }) => (
          <div key={id} className="w-[calc(50%-.5rem)] md:w-1/5">
            <div className="rounded overflow-hidden shadow-md">
              <VideoPlayer
                id={id}
                title={title}
                ratio="aspect-[9/16]"
                shorts
              />
            </div>
            <div className="text-center text-xs mt-2">{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

