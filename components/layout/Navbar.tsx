import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ReactIcon from '@/hoc/ReactIcon'
import ALink from '@/components/shared/ALink'
import ThemeChanger from '@/components/shared/ThemeChanger'
import LanguageChanger from '@/components/shared/LanguageChanger'
import { MdMenu } from '@/components/shared/Icons'

type NavbarProps = {
  showMenu: boolean
  darkMode: boolean
  showNavbar(): void
  handleDarkMode(mode: boolean): void
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const { locale, /* locales,  */ asPath } = useRouter()
  const { t } = useTranslation('menu')

  return (
    <>
      <header className="headerCustom navbar navbar-expand-sm">
        <a role="button" onClick={props.showNavbar}>
          <ReactIcon icon={<MdMenu size={24} color="#e9ecef" />} />
        </a>

        <div className="collapse navbar-collapse">
          {/* <a className="text-gray-200 h6 mt-2" aria-current="page">
            {copyright?.site?.label}
          </a> */}
        </div>

        <form className="col-lg-4 col-md-4 col-lg-auto me-3 d-none d-md-block">
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <ThemeChanger
          darkMode={props.darkMode}
          handleDarkMode={props.handleDarkMode}
          color1="#e9ecef"
          color2="#e9ecef"
        />
        <LanguageChanger
          colorLight="text-gray-200"
          colorDark="text-gray-200"
          locale={locale}
          asPath={asPath}
          darkMode={props.darkMode}
        />

        <div className="flex-shrink-0 dropdown">
          <a
            href="#"
            className="d-block link-dark text-gray-400 dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width={32}
              height={32}
              className="rounded-circle"
            />
          </a>
          <ul
            className={`dropdown-menu shadow dropdown-menu-end ${
              props.darkMode ? 'dropdown-menu-dark' : ''
            }`}
            aria-labelledby="dropdownUser1"
          >
            <li>
              <ALink className="dropdown-item" href="/stores/add">
                {t('New Store')}
              </ALink>
            </li>
            <li>
              <ALink className="dropdown-item" href="/settings">
                {t('Settings')}
              </ALink>
            </li>
            <li>
              <ALink className="dropdown-item" href="/profile">
                {t('Profile')}
              </ALink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <ALink className="dropdown-item" href="/logout">
                {t('Log out')}
              </ALink>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
