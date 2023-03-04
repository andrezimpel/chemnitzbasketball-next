export default function NewsletterThankYouPage(): JSX.Element {
  return (
    <div className="container max-w-4xl mx-auto px-4 mt-8">
      <div className="mt-14 font-overpass space-y-6">
        <div className="uppercase font-akzidenz">
          <div className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Danke</div>
        </div>
        <div className="space-y-4">
          <p className='md:text-lg text-justify'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300 animate-pulse duration-100 delay-100">Ohne dich könnten wir das Projekt nicht umsetzen. 💜</span></p>
          <p className='md:text-lg text-justify'>Wir halten dich in unserem Newsletter auf dem Laufenden.</p>
        </div>
      </div>
    </div>
  )
}