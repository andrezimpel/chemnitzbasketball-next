import Image from 'next/image'

const courtData = [
  {
    value: "1",
    file: '01.png',
    description: 'Auf dem Brühl steht ein großes "Zuhause". Der neue Court soll ein Zuhause für alle die Basketball lieben werden. Seine abstrakten Formen greifen die Spiellinien auf und bilden das Wort "Home". Er soll dafür sorgen, dass sich Menschen verbinden.',
    by: [
      { name: "Andre Zimpel", file: "andre.jpg", instagram: "andrezimpel" },
      { name: "Alex Rabtschuk", file: "alex.jpg", instagram: "alex.rbtk" },
    ]
  },
  {
    value: "5",
    file: '05.png',
    description: "Organische Formen treffen auf prägnante Farben. Starke Kontraste, für ein spannendes und optisch klares Spielerlebnis.",
    by: [
      { name: "Alexander Seypt", file: "alexander.jpg", instagram: "seyptbereit" }
    ]
  },
  {
    value: "6",
    file: '06.png',
    description: "Inspiriert wurde das Design vom taktischen Positionsspiel im Basketball. Der Basketballsport enthält dynamische Bewegungen und Abläufe. In unserer Gestaltung nehmen direkt Bezug darauf. Jede Teamseite ist hierbei optisch gut erkennbar.",
    by: [
      { name: "Antonia Viola", file: "antonia.jpg", instagram: "antoniaviola_com" },
      { name: "Sibylle Hornung", file: "sybille.jpg", instagram: "sibvlle" }
    ]
  },
  {
    value: "3",
    file: '03.png',
    description: 'Basketball ist ein Sport, der Jugend, Fashion, Musik und ganze Kulturen begeistert. Mit diesem Design wollten wir das in unserer Gestaltung ausdrücken. Wir möchten die Gemeinschaft Chemnitz hervorheben, und etwas erschaffen, was die Basketball Community miteinbezieht, und womit sich jede*r identifizieren kann.',
    by: [
      { name: "Antonia Viola", file: "antonia.jpg", instagram: "antoniaviola_com" },
      { name: "Sibylle Hornung", file: "sybille.jpg", instagram: "sibvlle" }
    ]
  },
  {
    value: "7",
    file: '07.png',
    description: 'Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function.',
    by: [
      { name: "Alexander Seypt", file: "alexander.jpg", instagram: "seyptbereit" }
    ]
  },
  {
    value: "2",
    file: '02.png',
    description: "Schon von Weitem ist der Basketballplatz kaum zu übersehen. Die sich überschneidenden Kreise repräsentieren die Begegnungspunkte, die sich zwischen verschiedenen Kulturen und Generationen auf dem Platz bilden. Die lebhaften und kräftigen Farben fallen unmittelbar ins Blickfeld und erfassen die Dynamik des Stadtlebens sowie des Basketballspiels.",
    by: [
      { name: "Johanna Hertel", file: "johanna.jpg", instagram: "johannahertel" }
    ]
  },
  {
    value: "4",
    file: '04.png',
    description: 'Das Design zeigt die starke Verbindung von Basketball, urbanem Streetstyle und der Hiphop-Kultur. Mit Formen, die an Graffitis erinnern, entsteht eine unglaubliche Dynamik, die die Bedeutung und Werte der weltweiten Subkultur betont.',
    by: [
      { name: "Johanna Hertel", file: "johanna.jpg", instagram: "johannahertel" }
    ]
  },
  {
    value: "8",
    file: '08.png',
    description: 'Ein modernes und klares Design. Es verkörpert das Sprichwort "weniger ist mehr" und überzeugt mit seinem Interpretationsspielraum.',
    by: [
      { name: "Andre Zimpel", file: "andre.jpg", instagram: "andrezimpel" },
      { name: "Alex Rabtschuk", file: "alex.jpg", instagram: "alex.rbtk" },
    ]
  }
]

export default function Courts() {
  return (
    <div id="voting" className="container max-w-5xl mx-auto px-4">
      <div className="uppercase text-center space-y-3 md:space-y-10">
        <div>
          <h2 className="inline bg-[#4842C0] font-bold text-3xl md:text-4xl lg:text-6xl">UNSER NEUES</h2>
        </div>
        <div>
          <div className='p-2 md:p-4 bg-stone-600 rounded-2xl md:rounded-[32px]'>
            <Image
              className='w-full'
              src={`/images/court-designs/${courtData[0].file}`}
              width={960}
              height={541}
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
          <p className='md:text-lg md:text-justify'>Unser neuer Basketballplatz am Konkordiapark spiegelt somit das wider, was er ist und sein soll: ein Zuhause für uns alle.Ein Ort der Begegnung, an dem jede*r willkommen ist.Es könnte sein, dass das ein oder andere Design seinen Weg auf einen anderen Platz in Chemnitz finden wird. 👀</p >
          <p className='md:text-lg md:text-justify'>Wir werden euch auf dem Laufenden halten, welche Schritte nun als Nächstes anstehen! 🚀</p >
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-4 md:gap-6 mt-16'>
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
            {
              court.by.length > 0 &&
              <div className='font-overpass p-2 text-stone-400 grid gap-2 lg:grid-cols-2 mt-2'>
                {court.by.map((artist, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Image
                      className='rounded-full border-4 border-[#4842C0]'
                      src={`/images/artists/${artist.file}`}
                      width={70}
                      height={70}
                      alt={`Artist #${artist.name}`}
                    />
                    <div className='space-y-1'>
                      <div>{artist.name}</div>
                      {artist.instagram && (
                        <a href={`https://www.instagram.com/${artist.instagram}`} className="inline-block">
                          <svg className="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}