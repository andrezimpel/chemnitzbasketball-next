const {
  validGATrackingId,
  getCookie
} = require('../helper')

const {
  addGoogleAnalytics,
  initializeGoogleAnalytics,
  trackGoogleAnalytics
} = require('./google-analytics')

exports.initializeAndTrackGoogleAnalytics = (options, pathname) => {
  if (
    getCookie(options.cookieName) === `true` &&
    validGATrackingId(options)
  ) {
    addGoogleAnalytics(options).then((status) => {
      if (status) {
        initializeGoogleAnalytics(options)
        // trackGoogleAnalytics(options, pathname)
      }
    })
  }
}