import VideoPlayer from "../video-player"
import DesignVotingFrorm from './form'

export default function DesignVoting() {
  return (
    <div id="voting" className="container max-w-4xl mx-auto px-4 mt-8 space-y-4 lg:space-y-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <div className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Das Design</div>
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
      <div className="mt-10 font-overpass space-y-6">
        <p className='md:text-lg md:text-justify'>Wir haben vier talentierte Künstler*innen ins Boot geholt, und jede*r von ihnen hat zwei Designs für unseren neuen Court gestaltet. Oberhalb findest du ein Video, das den gesamten Abstimmungsprozess erklärt. Schau es dir unbedingt an!</p>
        <p className='md:text-lg md:text-justify'>Die Zeit läuft! Die Abstimmung endet am <u>10. September</u>. Verpasse nicht die Chance, deine Stimme für das zukünftige Herzstück unserer Basketball-Community abzugeben!</p>
        <p className='md:text-lg md:text-justify text-transparent text-white'>
          👇 Scroll jetzt nach unten, um alle Designs zu sehen und abzustimmen. 👇
        </p>
      </div>
      <DesignVotingFrorm />
      <div className="hidden">
        Artists
      </div>
    </div>
  )
}