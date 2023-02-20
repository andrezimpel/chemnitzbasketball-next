import Link from 'next/link'

const links = [
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/impressum', label: 'Impressum' },
]

export default function LayoutFooter(): JSX.Element {
  return (
    <footer className="mt-6 md:mt-14 px-4 bg-purple-500 text-purple-50">
      <div className="container mx-auto py-8 text-center text-xs space-y-4">
        <div className='space-x-6'>
          {links.map(({ href, label }) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </div>
        <div>© 2022 CHEMNITZ BASKETBALL.<br />ALLE RECHTE VORBEHALTEN.</div>
      </div>
    </footer>
  )
}