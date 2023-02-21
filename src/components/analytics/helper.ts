import { Environments, GoogleAnalyticsOptions } from './default-options'

export const validGATrackingId = (options: GoogleAnalyticsOptions) =>
  options.trackingId &&
  options.trackingId.trim() !== ``

// exports.validGTMTrackingId = options =>
//   options.trackingId &&
//   options.trackingId.trim() !== ``

// exports.validFbPixelId = options =>
//   options.pixelId &&
//   options.pixelId.trim() !== ``

// exports.validTikTokPixelId = options =>
//   options.pixelId &&
//   options.pixelId.trim() !== ``

// exports.validHotjarId = options =>
//   options.hjid &&
//   options.hjid.trim() !== `` &&
//   options.hjsv &&
//   options.hjsv.trim() !== ``

// exports.validChatwootConfig = options =>
//   options.baseUrl &&
//   options.baseUrl.trim() !== `` &&
//   options.websiteToken &&
//   options.websiteToken.trim() !== ``

// exports.validLinkedinTrackingId = options =>
//   options.trackingId &&
//   options.trackingId.trim() !== ``

export const getCookie = (name: string) => {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

export const createCookie = (name: string, value: string | boolean, days: number) => {
  var expires
  if (days) {
    let date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = "; expires=" + date.toUTCString()
  }
  else {
    expires = ""
  }
  document.cookie = name + "=" + value + expires + "; path=/"
}

export const isEnvironmentValid = (environments: Environments[]) => {
  const currentEnvironment: any = process.env.ENV || process.env.NODE_ENV || `development`
  return environments.includes(currentEnvironment)
}