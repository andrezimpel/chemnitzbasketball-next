import { GoogleAnalyticsOptions } from '../default-options'
import {
  getCookie, validGATrackingId
} from '../helper'

const {
  addGoogleAnalytics,
  initializeGoogleAnalytics,
  trackGoogleAnalytics
} = require('./google-analytics')

export const initializeAndTrackGoogleAnalytics = (options: GoogleAnalyticsOptions, pathname: string) => {
  if (
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options)
  ) {
    addGoogleAnalytics(options).then((status: boolean) => {
      if (status) {
        initializeGoogleAnalytics(options)
        trackGoogleAnalytics(options, pathname)
      }
    })
  }
}