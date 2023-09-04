import VideoPlayer from "../video-player"
import DesignVotingFrorm from './form'

const artists = [
  [
    { name: "Alexander Seypt", file: "alexander.jpg" }
  ],
  [
    { name: "Alexander Seypt", file: "alexander.jpg" }
  ],
  [
    { name: "Alexander Seypt", file: "alexander.jpg" },
    { name: "Alexander Seypt", file: "alexander.jpg" }
  ],
  [
    { name: "Alexander Seypt", file: "alexander.jpg" }
  ]
]

export default function DesignVoting() {
  return (
    <div id="voting" className="container max-w-4xl mx-auto px-4 mt-8 space-y-4 lg:space-y-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <h2 className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Das Design</h2>
        </div>
        <div>
          <div className="text-xl md:text-4xl lg:text-5xl">💎 Jetzt abstimmen 💎</div>
        </div>
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Wie soll der Platz aussehen?</div>
        </div>
      </div>
      <div>
        <VideoPlayer
          id="S6EMQlq2zpw"
          title="Wie funktioniert die Abstimmung?"
        />
      </div>
      <div className="space-y-8">
        <div className="mt-10 font-overpass space-y-4">
          <p className='md:text-lg md:text-justify'>Wir haben fünf talentierte Künstler*innen ins Boot geholt, und jede*r von ihnen hat zwei Designs für unseren neuen Court gestaltet. Oberhalb findest du ein Video, das den gesamten Abstimmungsprozess erklärt. Schau es dir unbedingt an!</p>
          <p className='md:text-lg md:text-justify'>Die Zeit läuft! Die Abstimmung endet am <u>10. September</u>. Verpasse nicht die Chance, deine Stimme für das zukünftige Herzstück unserer Basketball-Community abzugeben!</p>
        </div>
        <div className='animate-bounce md:text-lg md:text-justify text-transparent text-white flex gap-2 text-center justify-center items-center font-overpass'>
          <div>👇</div>
          <div className="text-purple-200">
            Scroll jetzt nach unten, um alle Designs zu sehen und abzustimmen.
          </div>
          <div>👇</div>
        </div>
        <div>
          <DesignVotingFrorm />
        </div>
        <div className="mt-10 space-y-4">
          <h2 className="text-xl uppercase">Artists</h2>
          <p className='font-overpass md:text-lg md:text-justify'>Während des Votings könnt ihr <u>nicht</u> sehen, welche*r Künstler*in welches Design erstellt hat. Es geht nicht darum, für die Person zu stimmen, die wir am meisten mögen, sondern um das beste Design.</p>
          <div>
            {artists.map((artist, index) => (
              <div key={index}>hi</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}