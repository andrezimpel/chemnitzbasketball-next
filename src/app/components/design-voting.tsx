export default function DesignVoting() {
  return (
    <div id="voting" className="container max-w-4xl mx-auto px-4 mt-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <div className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Neuer Basketballplatz</div>
        </div>
        <div>
          <div className="text-2xl md:text-4xl lg:text-6xl">Jetzt abstimmen</div>
        </div>
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Konkordiapark</div>
        </div>
      </div>
      <div className="mt-10 font-overpass space-y-6">
        <p className='md:text-lg md:text-justify'>Es geht in den Endspurt! Wir wollen gemeinsam mit euch das Basketballfeld am Konkordiapark gestalten. Erste architektonische Entwürfe gibt es schon und diese möchten wir mit euch besprechen. Was sind eure Wünsche und Anregungen, was sollten wir noch berücksichtigen und was darf auf keinen Fall fehlen? Kommt in die Messe und tauscht euch mit uns aus!</p>
        <p className='md:text-lg md:text-justify'>Wir sind eine große und aktive Community. Es ist wichtig, dass wir genau das der Stadt zeigen.</p>
        <p className='md:text-lg md:text-justify text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400 animate-pulse duration-100 delay-100'>
          Je mehr Menschen abstimmen, desto wahrscheinlicher ist auch der Bau des neuen Basketballplatzes.
        </p>
      </div>
    </div>
  )
}