import { useTranslation } from 'react-i18next'
import ALink from '@/components/shared/ALink'
import {
  MdArticle,
  MdDashboard,
  MdLogout,
  MdPermMedia,
  MdSettings,
} from '@/components/shared/Icons'
import ReactIcon from '@/hoc/ReactIcon'
import { copyright } from '@/constants/common'

type SidebarProps = {
  showMenu: boolean
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  const { t } = useTranslation('menu')
  return (
    <>
      <div className={`l-navbar ${!props.showMenu ? '' : 'menuOpen'}`}>
        <ALink href="/" className="nav_logo">
          <span className="nav_logo-name text-gray-200 mt-2 h4">
            {copyright?.site?.label}
          </span>
        </ALink>

        <div className="scrollablebar mt-1">
          <ul className="navCustom nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <ALink href="/" className="nav-link" aria-current="page">
                <ReactIcon icon={<MdDashboard />} />
                <span className="link_text">{t('Dashboard')}</span>
              </ALink>
            </li>
            <li>
              <ALink href="/pages" className="nav-link">
                <ReactIcon icon={<MdArticle />} />
                <span className="link_text">{t('Pages')}</span>
              </ALink>
            </li>
            <li>
              <ALink href="/media" className="nav-link">
                <ReactIcon icon={<MdPermMedia />} />
                <span className="link_text">{t('Media')}</span>
              </ALink>
            </li>
            <li>
              <ALink href="/settings" className="nav-link">
                <ReactIcon icon={<MdSettings />} />
                <span className="link_text">{t('Settings')}</span>
              </ALink>
            </li>
            <li>
              <ALink href="/logout" className="nav-link">
                <ReactIcon icon={<MdLogout />} />
                <span className="link_text">{t('Log Out')}</span>
              </ALink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
