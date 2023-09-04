import "@fontsource/overpass-mono/500.css"
import "@fontsource/overpass-mono/700.css"
import "../styles/globals.css"

import localFont from "next/font/local"
import Analytics from "../components/analytics"
import LayoutFooter from "./footer"
import LayoutHeader from "./header"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | CHEMNITZ BASKETBALL',
    absolute: 'CHEMNITZ BASKETBALL',
  },
}

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
        <main className="md:min-h-[calc(100vh-128px-56px-56px-216px)]">{children}</main>
        <LayoutFooter />
        <Analytics />
      </body>
    </html>
  )
}
