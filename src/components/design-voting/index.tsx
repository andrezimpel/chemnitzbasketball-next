import Image from 'next/image'
import Link from 'next/link'
import VideoPlayer from "../video-player"
import DesignVotingFrorm from './form'

const artists = [
  { name: "Alexander Seypt", file: "alexander.jpg", instagram: "seyptbereit" },
  { name: "Andre Zimpel", file: "andre.jpg", instagram: "andrezimpel" },
  { name: "Antonia Viola", file: "antonia.jpg", instagram: "antoniaviola_com" },
  { name: "Johanna Hertel", file: "johanna.jpg", instagram: "johannahertel" },
  { name: "Sybille Hornung", file: "sybille.jpg", instagram: "sibvlle" }
]

export default function DesignVoting() {
  return (
    <div id="voting" className="container max-w-4xl mx-auto px-4 mt-8 space-y-4 lg:space-y-8">
      <div className="uppercase text-center space-y-3 md:space-y-6">
        <div>
          <h2 className="inline bg-purple-500 font-bold text-lg md:text-2xl lg:text-4xl">Das Design</h2>
        </div>
        <div>
          <div className="text-xl md:text-4xl lg:text-5xl">💎 Jetzt abstimmen 💎</div>
        </div>
        <div>
          <div className="inline bg-lime-500 text-black font-bold md:text-xl lg:text-2xl">Wie soll der Platz aussehen?</div>
        </div>
      </div>
      <div>
        <VideoPlayer
          id="S6EMQlq2zpw"
          title="Wie funktioniert die Abstimmung?"
        />
      </div>
      <div className="space-y-8">
        <div className="mt-10 font-overpass space-y-4">
          <p className='md:text-lg md:text-justify'>Wir haben fünf talentierte Künstler*innen ins Boot geholt und jede*r von ihnen hat zwei Designs für unseren neuen Court gestaltet. Oberhalb findest du ein Video, das den Abstimmungsprozess erklärt. Schau es dir unbedingt an!</p>
          <p className='md:text-lg md:text-justify'>Die Abstimmung endet am <u>10. September</u>. Verpasse nicht die Chance, deine Stimme für das zukünftige Herzstück unserer Basketball-Community abzugeben!</p>
        </div>
        <div className='animate-bounce md:text-lg md:text-justify text-transparent text-white flex gap-2 text-center justify-center items-center font-overpass'>
          <div>👇</div>
          <div className="text-purple-200 leading-5">
            Scroll jetzt nach unten, um alle Designs zu sehen und abzustimmen.
          </div>
          <div>👇</div>
        </div>
        <div>
          <DesignVotingFrorm />
        </div>
        <div className="mt-10 space-y-4">
          <h2 className="text-xl uppercase">Artists</h2>
          <p className='font-overpass md:text-lg md:text-justify'>Während des Votings könnt ihr <u>nicht</u> sehen, welcher Artist welches Design erstellt hat. Es geht nicht darum, für die Person zu stimmen, die ihr am meisten mögt, sondern um das beste Design.</p>
          <div className='space-y-4 grid grid-cols-1 md:grid-cols-2'>
            {artists.map((artist, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Image
                  className='w-28 rounded-full border-4 border-purple-600'
                  src={`/images/artists/${artist.file}`}
                  width={112}
                  height={112}
                  alt={`Artist #${artist.name}`}
                />
                <div className='space-y-1'>
                  <div>{artist.name}</div>
                  {artist.instagram && (
                    <Link href={artist.instagram} className="inline-block">
                      <svg className="fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}