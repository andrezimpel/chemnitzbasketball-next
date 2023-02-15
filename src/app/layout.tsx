import localFont from '@next/font/local'
import "../styles/globals.css"
import LayoutFooter from "./footer"
import LayoutHeader from "./header"

const akzidenz = localFont({
  src: [
    {
      path: '../fonts/AAAkzidenzGroteskBQ-BoldExt.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/AAAkzidenzGroteskBQ-MedExt.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-akzidenz',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${akzidenz.variable} font-sans bg-black scroll-smooth`}>
      <head />
      <body className="bg-black text-white">
        <LayoutHeader />
        <main>{children}</main>
        <LayoutFooter />
      </body>
    </html>
  )
}
