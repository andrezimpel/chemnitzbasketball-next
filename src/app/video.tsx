export default function Video(): JSX.Element {
  return (
    <div id="video" className="container mx-auto px-4 my-4">
      <iframe className="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/ddQ6U56e9-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}