import React, { ReactChild, useEffect, useState } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import updateThemeMode from '@/utils/updateThemeMode'

interface LayoutProps {
  title?: string
  description?: string
  children: ReactChild | ReactChild[]
}

const Layout = ({ children, title = 'Admin' }: LayoutProps): any => {
  const [showMenu, setShowMenu] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const bodyEl = document.body
    if (showMenu) {
      bodyEl.classList.add('l-sidebar')
      bodyEl.classList.remove('m-sidebar')
    } else {
      bodyEl.classList.remove('l-sidebar')
      bodyEl.classList.add('m-sidebar')
    }

    return () => {
      bodyEl.classList.remove('l-sidebar', 'm-sidebar')
    }
  }, [showMenu])

  useEffect(() => {
    const linkColor = document.querySelectorAll('.navUl .nav_link')

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'))
        this.classList.add('active')
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink))
  }, [])

  const showNavbar = () => {
    setShowMenu(!showMenu)
  }

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

      <Navbar
        showMenu={showMenu}
        showNavbar={showNavbar}
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <Sidebar showMenu={showMenu} />

      <div className="height-100 contentDiv p-3">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
