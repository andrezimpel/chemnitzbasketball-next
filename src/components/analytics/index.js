'use client'

const {
  initializeAndTrackGoogleAnalytics
} = require('./services')
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import CookieBanner from './banner'
import { defaultOptions } from './default-options'
import { isEnvironmentValid } from './helper'
import options from './options'

const mergedOptions = {
  ...defaultOptions,
  ...options,
  googleAnalytics: {
    ...defaultOptions.googleAnalytics,
    ...options.googleAnalytics
  }
}

export default function Analytics() {
  // if document is not defined, we are on the server
  if (typeof document === 'undefined') {
    return null
  }
  return <Component />
}

function Component() {
  const pathname = usePathname()

  useEffect(() => {
    initializeAndTrack(pathname)
  }, [pathname])

  return <CookieBanner mergedOptions={mergedOptions} pathname={pathname} />
}

export function initializeAndTrack(pathname) {
  if (isEnvironmentValid(options.environments)) {
    initializeAndTrackGoogleAnalytics(mergedOptions.googleAnalytics, pathname)
  }
}