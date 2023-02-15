export default function Video(): JSX.Element {
  return (
    <div id="about" className="my-8 space-y-4">
      <div className="container max-w-3xl mx-auto px-4">
        <div>
          <b className='bg-lime-500 font-bold text-black text-lg uppercase'>Über das Projekt</b>
        </div>
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