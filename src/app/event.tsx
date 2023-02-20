import EventForm from './event-form'

export default function Event(): JSX.Element {
  return (
    <div id="beteiligung" className="container max-w-4xl mx-auto px-4 mt-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <div className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Projektbeteiligung</div>
        </div>
        <div>
          <div className="text-2xl md:text-4xl lg:text-6xl">4. März, 16.00 Uhr</div>
          <div className="text-xs md:text-sm text-lilac-500">2h vor dem Spiel der <span className="hover:text-orange-500">NINERS</span><span className="max-md:hidden"> gegen Braunschweig</span></div>
        </div>
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Messe Chemnitz</div>
        </div>
      </div>
      <div className="mt-14 font-overpass space-y-6">
        <p className='md:text-lg text-justify'>Es geht in den Endspurt! Wir wollen gemeinsam mit euch das Basketballfeld am Konkordiapark gestalten. Erste architektonische Entwürfe gibt es schon und diese möchten wir mit euch besprechen. Was sind eure Wünsche und Anregungen, was sollten wir noch berücksichtigen und was darf auf keinen Fall fehlen? Kommt in die Messe und tauscht euch mit uns aus!</p>
        <p className='md:text-lg text-justify'>Wir sind eine große und aktive Community. Es ist wichtig, dass wir genau das der Stadt zeigen. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300 animate-pulse duration-100 delay-100">Je mehr Menschen zur Präsentation kommen, desto wahrscheinlicher ist auch die Umsetzung eines neuen Basketballplatzes.</span></p>
      </div>
      <div className="mt-14 font-overpass space-y-6">
        <EventForm />
        <p className='md:text-lg text-justify'>Wir starten zwei Stunden vor dem Spiel der NINERS gegen Braunschweig um 16.00 Uhr. Ihr benögtigt <u>kein</u> Ticket für das Spiel, um an der Präsentation teilzunehmen.</p>
      </div>
    </div>
  )
}
