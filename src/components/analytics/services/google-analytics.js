'use client'

const {
  validGATrackingId,
  getCookie
} = require('../helper')

exports.addGoogleAnalytics = ({ trackingId }) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('google-analytics')) return resolve(true)

    const head = document.head || document.getElementsByTagName('head')[0]
    const script = document.createElement(`script`)
    script.type = `text/javascript`
    script.id = `google-analytics`
    script.onload = () => {
      sessionStorage.setItem('GDPRCookiesGoogleAnalyticsAdded', true)
      resolve(true)
    }
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`

    head.appendChild(script)
  });
}

exports.initializeGoogleAnalytics = (options) => {
  if (
    !window.gtag &&
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options)
  ) {
    console.log('init google analytics')
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); }
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

exports.trackGoogleAnalytics = (options, pathname) => {
  if (
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options) &&
    typeof window.gtag === "function"
  ) {
    console.log('track google analytics')
    window.gtag(`event`, `page_view`, { page_path: pathname })
  }
}