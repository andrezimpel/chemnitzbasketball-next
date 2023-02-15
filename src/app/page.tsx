import Event from './event'
import Video from './video'

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <div className='container mx-auto max-w-3xl px-4 mb-8'>
        <div>
          <b className='bg-pink-600 text-lg uppercase'>Projektvorstellung</b>
        </div>
        <div>Wir laden euch am 4. März 16.00 Uhr in die Messe ein.</div>
        <a href="#event" className='group mt-2 inline-block'>Mehr erfahren <span aria-hidden="true" className='transition-transform inline-block group-hover:translate-x-2'> &rarr;</span></a>
      </div>
      <Event />
      <div className="container max-w-3xl mx-auto my-8 px-4 text-sm md:text-base">
        <div>
          <b className='bg-lime-500 text-black text-lg uppercase'>Über das Projekt</b>
        </div>
        <div>Das Projekt CHEMNITZ BASKETBALL bringt die Liebe der Stadt für Kunst, Kultur und Sport zum Ausdruck. Helft uns, es umzusetzen!</div>
      </div>
      <Video />
      <div>form</div>
      <div>messages</div>
      <div>FAQ</div>
    </div>
  )
}