'use client'

import { GoogleAnalyticsOptions } from '../default-options'
import {
  getCookie, validGATrackingId
} from '../helper'

export const addGoogleAnalytics = ({ trackingId }: { trackingId: string }) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('google-analytics')) return resolve(true)

    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement(`script`)
    script.type = `text/javascript`
    script.id = `google-analytics`
    script.onload = () => {
      sessionStorage.setItem('GDPRCookiesGoogleAnalyticsAdded', true.toString())
      resolve(true)
    }
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`

    head.appendChild(script)
  })
}

export const initializeGoogleAnalytics = (options: GoogleAnalyticsOptions) => {
  if (
    !window.gtag &&
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options)
  ) {
    console.log('init google analytics')
    // @ts-expect-error
    window.dataLayer = window.dataLayer || []
    // @ts-expect-error
    window.gtag = function () { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())

    let gaAnonymize = options.anonymize
    let gaAllowAdFeatures = options.allowAdFeatures
    gaAnonymize = gaAnonymize !== undefined ? gaAnonymize : true
    gaAllowAdFeatures = gaAllowAdFeatures !== undefined ? gaAllowAdFeatures : true

    window.gtag('config', options.trackingId, {
      'anonymize_ip': gaAnonymize,
      'allow_google_signals': gaAllowAdFeatures
    })
  }
}

export const trackGoogleAnalytics = (options: GoogleAnalyticsOptions, pathname: string) => {
  if (
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options) &&
    typeof window.gtag === "function"
  ) {
    console.log('track google analytics')
    window.gtag(`event`, `page_view`, { page_path: pathname })
  }
}