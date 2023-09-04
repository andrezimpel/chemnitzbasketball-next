import EventForm from './event-form'

export default function Event(): JSX.Element {
  return (
    <div id="beteiligung" className="container max-w-4xl mx-auto px-4 mt-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Immer up-to-date</div>
        </div>
        <div>
          <div className="text-2xl md:text-4xl lg:text-6xl">Newsletter</div>
        </div>
      </div>
      <div className="mt-10 font-overpass space-y-6">
        <p className='md:text-lg md:text-justify'>Trag dich für unseren Newsletter ein. So verpasst du kein Update (welche in nächster zeit öfter kommen).</p>
        <p className='md:text-lg md:text-justify'>Wir freuen uns sehr, dass du unser Projekt unterstützt. 🏀💜</p>
        <EventForm />
      </div>
    </div>
  )
}
