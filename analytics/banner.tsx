import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../src/components/button'
import { OptionProps } from './default-options'
import { createCookie, getCookie } from './helper'
import { initializeAndTrack } from './index'

const BANNER_HIDDEN_KEY = 'hideCookieBanner'
const ESSENTIALS_KEY = 'chemnitz-basketball-allow-cookies'

export default function CookieBanner({ mergedOptions, pathname }: { mergedOptions: OptionProps, pathname: string }): JSX.Element | null {
  const [allowGoogle, setAllowGoogle] = useState(false)
  const [hideBanner, setHideBanner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHideBanner(!!getCookie(BANNER_HIDDEN_KEY))
    }, 100)
  }, [])

  if (hideBanner) return null

  const sections = [
    {
      headline: 'Technisch Notwendige Cookies',
      description: 'Notwendige Cookies ermöglichen grundlegende Funktionen und sind für das einwandfreie Funktionieren der Website notwendig.',
      action: () => { },
      status: undefined
    },
    {
      headline: 'Statistik (Google Analytics & Hotjar)',
      description: 'Zur Website-Optimierung erheben wir Daten, die bereits für die technische Bereitstellung des Webangebots erforderlich sind. Solche Daten werden ausschließlich aggregiert und uns als statistische Übersicht zur Verfügung gestellt.',
      action: () => setAllowGoogle(!allowGoogle),
      status: allowGoogle
    },
  ].map((section, index) => {
    return (
      <div key={index} className="mt-2">
        <label className="flex space-x-2">
          {(section.status === undefined ?
            <input type='checkbox' className='mt-[2px] rounded' checked={true} disabled /> :
            <input type='checkbox' className='mt-[2px] rounded' checked={section.status} onChange={section.action} />
          )}
          <div>
            <div className="font-bold text-sm">{section.headline}</div>
            <div className="text-xs text-purple-300">
              {section.description}
            </div>
          </div>
        </label>
      </div>
    )
  })

  const acceptAll = () => {
    createCookie(BANNER_HIDDEN_KEY, true, 90)
    createCookie(ESSENTIALS_KEY, true, 90)
    createCookie(mergedOptions.googleAnalytics.cookieName, true, 90)

    initializeAndTrack(pathname)
    setHideBanner(true)
  }

  const acceptSelection = () => {
    createCookie(BANNER_HIDDEN_KEY, true, 90)
    createCookie(ESSENTIALS_KEY, true, 90)
    createCookie(mergedOptions.googleAnalytics.cookieName, allowGoogle, 90)

    initializeAndTrack(pathname)
    setHideBanner(true)
  }

  const acceptEssentials = () => {
    createCookie(BANNER_HIDDEN_KEY, true, 90)
    createCookie(ESSENTIALS_KEY, false, 90)
    createCookie(mergedOptions.googleAnalytics.cookieName, false, 90)

    setHideBanner(true)
  }

  return (
    <>
      <div className="cookie-banner fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-purple-600 text-purple-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <div className="mb-2 text-lg font-bold">Cookie Einstellungen</div>
              <div className="text-sm">
                Um unsere Webseite optimal zu gestalten, verwenden wir Cookies, Google Analytics und Dienste von Drittanbietern wie bspw. YouTube. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies und der Analyse Ihrer Daten zu. Weitere Informationen erhalten Sie in unserer <Link className='hover:underline' href="/datenschutz">Datenschutzerklärung</Link>.
              </div>
              <div className="mt-2">{sections}</div>
              <div className="mt-4">
                <div className='flex flex-col space-y-3 items-center justify-center'>
                  <Button
                    onClick={acceptAll}
                  >Alle akzeptieren</Button>
                  <Button
                    onClick={acceptSelection}
                    variant="link"
                  >Auswahl akzeptieren</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black bg-opacity-60" />
    </>
  )
}