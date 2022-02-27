import { ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import '@/assets/scss/app.scss'

type Page<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // eslint-disable-next-line no-console
  console.log(metric)

  /* const body = JSON.stringify(metric)
  const url = 'https://example.com/analytics'

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  } */
}

const MyApp = ({ Component, pageProps }: Props) => {
  useEffect(() => {
    typeof document !== undefined ? require('assets/js/custom-build.js') : null
    // typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null
  }, [])

  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default appWithTranslation(MyApp)
