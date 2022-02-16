import React, { ReactNode, useLayoutEffect, useState } from 'react'
import Head from 'next/head'
import updateThemeMode from '@/utils/updateThemeMode'
import ThemeChanger from '../shared/ThemeChanger'
import { useRouter } from 'next/router'
import LanguageChanger from '../shared/LanguageChanger'

type Props = {
  children?: ReactNode
  title?: string
}

const GuestLayout = ({ children, title = 'Admin' }: Props): any => {
  const { locale, /* locales,  */ asPath } = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  useLayoutEffect(() => {
    const bodyEl = document.body
    bodyEl.classList.add('n-sidebar')
    bodyEl.classList.remove('l-sidebar', 'm-sidebar')

    return () => {
      bodyEl.classList.remove('l-sidebar', 'm-sidebar')
    }
  }, [])

  const handleDarkMode = (mode: boolean) => {
    setDarkMode(mode)
    updateThemeMode(mode)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#7952b3" />
      </Head>

      {children}

      <div id="themeChanger">
        <ThemeChanger
          darkMode={darkMode}
          handleDarkMode={handleDarkMode}
          color1="#f5861e"
          color2="#e9ecef"
        />
        <div className="float-end">
          <LanguageChanger
            colorLight="text-gray-900"
            colorDark="text-gray-200"
            locale={locale}
            asPath={asPath}
            darkMode={darkMode}
          />
        </div>
      </div>
    </>
  )
}

export default GuestLayout
