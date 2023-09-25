import Image from 'next/image'

const courtData = [
  {
    value: "1",
    file: '01.png',
    description: 'Auf dem Brühl steht ein großes "Zuhause". Der neue Court soll ein Zuhause für alle die Basketball lieben werden. Seine abstrakten Formen greifen die Spiellinien auf und bilden das Wort "Home". Er soll dafür sorgen, dass sich Menschen verbinden.',
    by: "Andre Zimpel & Alex Rabtschuk"
  },
  {
    value: "5",
    file: '05.png',
    description: "Organische Formen treffen auf prägnante Farben. Starke Kontraste, für ein spannendes und optisch klares Spielerlebnis.",
    by: "Alexander Seypt"
  },
  {
    value: "6",
    file: '06.png',
    description: "Inspiriert wurde das Design vom taktischen Positionsspiel im Basketball. Der Basketballsport enthält dynamische Bewegungen und Abläufe. In unserer Gestaltung nehmen direkt Bezug darauf. Jede Teamseite ist hierbei optisch gut erkennbar.",
    by: "Antonia Viola & Sibylle Hornung"
  },
  {
    value: "3",
    file: '03.png',
    description: 'Basketball ist ein Sport, der Jugend, Fashion, Musik und ganze Kulturen begeistert. Mit diesem Design wollten wir das in unserer Gestaltung ausdrücken. Wir möchten die Gemeinschaft Chemnitz hervorheben, und etwas erschaffen, was die Basketball Community miteinbezieht, und womit sich jede*r identifizieren kann.',
    by: "Antonia Viola & Sibylle Hornung"
  },
  {
    value: "7",
    file: '07.png',
    description: 'Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function.',
    by: "Alexander Seypt"
  },
  {
    value: "2",
    file: '02.png',
    description: "Schon von Weitem ist der Basketballplatz kaum zu übersehen. Die sich überschneidenden Kreise repräsentieren die Begegnungspunkte, die sich zwischen verschiedenen Kulturen und Generationen auf dem Platz bilden. Die lebhaften und kräftigen Farben fallen unmittelbar ins Blickfeld und erfassen die Dynamik des Stadtlebens sowie des Basketballspiels.",
    by: "Johanna Hertel"
  },
  {
    value: "4",
    file: '04.png',
    description: 'Das Design zeigt die starke Verbindung von Basketball, urbanem Streetstyle und der Hiphop-Kultur. Mit Formen, die an Graffitis erinnern, entsteht eine unglaubliche Dynamik, die die Bedeutung und Werte der weltweiten Subkultur betont.',
    by: "Johanna Hertel"
  },
  {
    value: "8",
    file: '08.png',
    description: 'Ein modernes und klares Design. Es verkörpert das Sprichwort "weniger ist mehr" und überzeugt mit seinem Interpretationsspielraum.',
    by: "Andre Zimpel & Alex Rabtschuk"
  }
]

export default function Courts() {
  return (
    <div id="voting" className="container max-w-4xl mx-auto px-4">
      <div className="uppercase text-center space-y-3 md:space-y-10">
        <div>
          <h2 className="inline bg-[#4842C0] font-bold text-3xl md:text-4xl lg:text-6xl">UNSER NEUES</h2>
        </div>
        <div>
          <div className='p-2 md:p-4 bg-stone-600 rounded-2xl md:rounded-[32px]'>
            <Image
              className='w-full'
              src={`/images/court-designs/${courtData[0].file}`}
              width={832}
              height={468}
              alt={`Design ${courtData[0].by}`}
            />
          </div>
        </div>
        <div>
          <div className="inline bg-[#CEEAA4] text-black font-bold text-3xl md:text-4xl lg:text-6xl">Zuhause</div>
        </div>
      </div>
      <div className="space-y-8 mt-16">
        <div className="mt-10 font-overpass space-y-4">
          <p className='md:text-lg md:text-justify underline'>Das Design unseres neuen Basketballplatzes steht fest! 🏀</p>
          <p className='md:text-lg md:text-justify'>Wir freuen uns sehr über die große Beteiligung. In der ersten Runde hatten wir über 2000 bestätigte Stimmen. Dabei setzten sich drei von acht Designs an die Spitze und lagen extrem nah beieinander.</p>
          <p className='md:text-lg md:text-justify'>In der finalen Runde haben über 1000 Menschen ihren Favoriten aus den Top drei ausgewählt. Auf dem ersten Platz liegt "Home" mit 41% von Andre Zimpel & Alex Rabtschuk, gefolgt von "Floater" mit 34% von Alexander Seypt und auf dem dritten Platz "Dynamic Lines" mit 25% von Antonia Viola & Sibylle Hornung.</p>
          <p className='md:text-lg md:text-justify'>Unser neuer Basketballplatz am Konkordiapark spiegelt somit das wider, was er ist und sein soll: ein Zuhause für uns alle.Ein Ort der Begegnung, an dem jede * r willkommen ist.Es könnte sein, dass das ein oder andere Design seinen Weg auf einen anderen Platz in Chemnitz finden wird. 👀</p >
          <p className='md:text-lg md:text-justify'>Wir werden euch auf dem Laufenden halten, welche Schritte nun als Nächstes anstehen! 🚀</p >
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-4 mt-16'>
        {courtData.map((court, index) => (
          <div key={index}>
            <div className='p-2 bg-stone-600 rounded-2xl'>
              <Image
                className='w-full'
                src={`/images/court-designs/${court.file}`}
                width={500}
                height={500}
                alt={court.by && `Design ${court.by}`}
              />
            </div>
            {court.description && <div className='mt-4 font-overpass px-2'>{court.description}</div>}
            {court.by && <div className='font-overpass p-2 text-stone-400'>von {court.by}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}