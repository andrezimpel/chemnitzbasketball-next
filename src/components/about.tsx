import VideoPlayer from "./video-player"

export default function Video(): JSX.Element {
  return (
    <div id="about" className="my-12 space-y-4">
      <div className="container max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="inline font-bold bg-lime-500 text-black text-lg md:text-xl uppercase">Über das Projekt</h2>
        <div className="space-y-2 font-overpass md:text-justify">
          <p className="md:text-lg">CHEMNITZ BASKETBALL bringt die Liebe der Stadt für Kunst, Kultur und Sport zum Ausdruck. Wir glauben fest daran, dass ein neuer Basketballplatz auf dem Konkordiapark eine Bereicherung für unsere Stadt ist. Helft uns das Projekt umzusetzen!</p>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto px-4">
        <VideoPlayer
          id="ddQ6U56e9-k"
          title="Projekt Konkordiapark | CHEMNITZ BASKETBALL"
        />
      </div>
    </div>
  )
}