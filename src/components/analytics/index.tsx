'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import CookieBanner from './banner'
import { defaultOptions, OptionProps } from './default-options'
import { isEnvironmentValid } from './helper'
import options from './options'
import { initializeAndTrackGoogleAnalytics } from './services'

const mergedOptions = {
  ...defaultOptions,
  ...options,
  googleAnalytics: {
    ...defaultOptions.googleAnalytics,
    ...options.googleAnalytics
  }
} as OptionProps

export default function Analytics() {
  // if document is not defined, we are on the server
  if (typeof document === 'undefined') {
    return null
  }
  return <Component />
}

function Component() {
  const pathname = usePathname() as string

  useEffect(() => {
    initializeAndTrack(pathname)
  }, [pathname])

  return <CookieBanner mergedOptions={mergedOptions} pathname={pathname} />
}

export function initializeAndTrack(pathname: string) {
  if (isEnvironmentValid(options.environments)) {
    initializeAndTrackGoogleAnalytics(mergedOptions.googleAnalytics, pathname)
  }
}