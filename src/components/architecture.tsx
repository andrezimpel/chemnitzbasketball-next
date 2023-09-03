import VideoPlayer from "./video-player"

export default function Video(): JSX.Element {
  return (
    <div className="my-12 space-y-4">
      <div className="container max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="inline font-bold bg-blue-500 text-lg md:text-xl uppercase">Architektonische Planung</h2>
        <div className="space-y-2 font-overpass md:text-justify">
          <p className="md:text-lg">Im folgenden Video seht ihr einen ersten architektonischen Entwurf. Dabei geht es vor allem um die landschaftliche und <u>noch nicht</u> um die künstlerische Gestaltung des Platzes. Wir freuen uns sehr darauf die Entwürfe mit euch zu diskutieren und eine gemeinsame Vision für den Court sowie den Konkordiaplatz zu formen.</p>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto px-4">
        <VideoPlayer
          id="8IqqbKSCmVU"
          title="Architektonische Planung | CHEMNITZ BASKETBALL"
        />
      </div>
    </div>
  )
}