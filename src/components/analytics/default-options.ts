export type Environments = 'production' | 'development'

export interface OptionProps {
  environments: Environments[]
  googleAnalytics: GoogleAnalyticsOptions
}

export interface GoogleAnalyticsOptions {
  cookieName: string
  anonymize: boolean
  allowAdFeatures: boolean
  trackingId?: string
}


export const defaultOptions: OptionProps = {
  environments: [`production`],
  googleAnalytics: {
    cookieName: `gdpr-google-analytics`,
    anonymize: true,
    allowAdFeatures: false
  },
  // googleTagManager: {
  //   cookieName: `gatsby-gdpr-google-tagmanager`,
  //   dataLayerName: `dataLayer`,
  //   routeChangeEvent: `gatsbyRouteChange`
  // },
  // facebookPixel: {
  //   cookieName: `gatsby-gdpr-facebook-pixel`
  // },
  // tikTokPixel: {
  //   cookieName: `gatsby-gdpr-tiktok-pixel`
  // },
  // hotjar: {
  //   cookieName: `gatsby-gdpr-hotjar`
  // },
  // chatwoot: {
  //   cookieName: 'gatsby-gdpr-chatwoot'
  // },
  // linkedin: {
  //   cookieName: 'gatsby-gdpr-linkedin'
  // }
}