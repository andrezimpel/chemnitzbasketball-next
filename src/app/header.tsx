import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    href: '#event',
    label: 'Vorstellung'
  },
  {
    href: '#about',
    label: 'Das Projekt'
  },
  // {
  //   href: '#messages',
  //   label: 'Nachrichten'
  // },
]

export default function LayoutHeader(): JSX.Element {
  return (
    <header className='py-4 md:py-12 container mx-auto'>
      <div className="px-4 text-center text-xs space-y-4 flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              priority
              src="/images/logo.svg"
              height={120}
              width={120}
              alt="Logo CHEMNITZ BASKETBALL"
              className='block w-[80px] md:w-[120px] hover:animate-spin'
            />
          </Link>
        </div>
        <div className='flex flex-col md:flex-row items-end md:space-x-4'>
          {links.map(({ href, label }) => (
            <a href={href} className="hover:underline hover:text-purple-50 text-base md:text-lg transition-colors">{label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}