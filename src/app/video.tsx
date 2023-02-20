export default function Video(): JSX.Element {
  return (
    <div id="about" className="my-12 space-y-4">
      <div className="container mx-auto px-4">
        <h2 className="inline font-bold bg-lime-500 text-black text-lg md:text-xl uppercase">Über das Projekt</h2>
        <div className="space-y-2">
          <div>Unser Projekt bringt die Liebe der Stadt für Kunst, Kultur und Sport zum Ausdruck.</div>
          <div>Helft uns, es umzusetzen!</div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/ddQ6U56e9-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  )
}