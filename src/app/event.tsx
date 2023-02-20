import EventForm from './event-form'

export default function Event(): JSX.Element {
  return (
    <div id="event" className="container mx-auto px-4 mt-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <div className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Projektbeteiligung</div>
        </div>
        <div>
          <div className="text-2xl md:text-4xl lg:text-6xl">4. März, 16.00 Uhr</div>
          <div className="text-xs md:text-sm text-gray-400">2h vor dem Spiel der <span className="hover:text-orange-500">NINERS</span><span className="max-md:hidden"> gegen Braunschweig</span></div>
        </div>
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Messe Chemnitz</div>
        </div>
      </div>
      <div className="mt-14 font-overpass space-y-6">
        <p className='md:text-lg text-justify'>Es geht in den Endspurt! Wir wollen gemeinsam mit euch das Basketballfeld am Konkordiapark gestalten. Erste Entwürfe gibt es schon und diese möchten wir mit euch besprechen. Was sind eure Wünsche und Anregungen, was sollten wir noch berücksichtigen und was darf auf keinen Fall fehlen? Kommt in die Messe und tauscht euch mit uns aus!</p>
        <p className='md:text-lg text-justify'>Wir sind eine große und aktive Community. Es ist wichtig, dass wir genau das der Stadt zeigen. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-400 animate-pulse duration-100 delay-100">Je mehr Menschen zur Präsentation kommen, desto wahrscheinlicher ist auch die Umsetzung eines neuen Basketballplatzes.</span></p>
      </div>
      <div className="mt-14 font-overpass space-y-6">
        <p className='md:text-lg text-justify'>Wir freuen uns sehr, wernn ihr an der Präsentation teilnehmt. Damit wir abschätzen können wie groß der Rahmen wird, bitten wir euch um eine unverbindliche Anmeldung.</p>
        <EventForm />
      </div>
    </div>
  )
}



{/* <h2 className="inline font-bold bg-pink-600 text-lg md:text-xl uppercase">Projektvorstellung</h2>
      <div className="grid gap-2 grid-cols-[80px_1fr] mt-2">
        <div><b className="bg-blue-500">Was</b></div>
        <div>Basketballplatz Konkordiapark</div>
        <div><b className="bg-blue-500">Wo</b></div>
        <div>Messe Chemnitz</div>
        <div><b className="bg-blue-500">Wann</b></div>
        <div>4. März 2021, 16.00 Uhr<br />2h vor dem Spiel der NINERS gegen Braunchweig</div>
      </div>
      <p className="mt-4">Es geht in den Endspurt! Wir wollen gemeinsam mit euch das Basketballfeld sowie den Konkordiapark gestalten. Kommt vorbei und nutzt die Möglichkeit euch mit uns auszutauschen, Ideen zu besprechen und eine Vision zu formen.</p>
      <p className="mt-2 text-pink-500">Wir sind eine große und aktive Community. Es ist wichtig, dass wir genau das der Stadt zeigen. Je mehr von euch zur Präsentation kommen, desto wahrscheinlicher ist auch die Umsetzung.</p>
      <p className="mt-2">Im Anschluss freuen wir uns darauf, mit euch das Spiel der NINERS gegen Braunschweig zu schauen.</p> */}