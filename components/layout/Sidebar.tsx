import { useTranslation } from 'react-i18next'
import Icons from '@/assets/icons'
import ALink from '@/components/shared/ALink'

type SidebarProps = {
  showMenu: boolean
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  const { t } = useTranslation('common')
  return (
    <>
      <div className={`l-navbar ${!props.showMenu ? '' : 'menuOpen'}`}>
        <ALink href="/" className="nav_logo">
          <span className="nav_logo-name text-gray-200 mt-2 h4">
            {t('CruzerAdmin')}
          </span>
        </ALink>
        <div className="scrollablebar mt-1">
          <ul className="navCustom nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <ALink href="/" className="nav-link active" aria-current="page">
                <Icons name="dashboard" />
                <span className="link_text">Dashboard</span>
              </ALink>
            </li>
            <li>
              <ALink href="/pages" className="nav-link">
                <Icons name="pages" />
                <span className="link_text">Pages</span>
              </ALink>
            </li>
            <li>
              <ALink href="/media" className="nav-link">
                <Icons name="media" />
                <span className="link_text">Media</span>
              </ALink>
            </li>
            <li>
              <ALink href="/categories" className="nav-link">
                <Icons name="categories" />
                <span className="link_text">Categories</span>
              </ALink>
            </li>
            <li>
              <ALink href="/orders" className="nav-link">
                <Icons name="products" />
                <span className="link_text">Products</span>
              </ALink>
            </li>
            <li>
              <ALink href="/tags" className="nav-link">
                <Icons name="tags" />
                <span className="link_text">Tags</span>
              </ALink>
            </li>
            <li className="hasMenu">
              <a
                href="#productMenu"
                className="nav-link"
                data-bs-toggle="collapse"
              >
                <Icons name="orders" />
                <span className="link_text">
                  Orders <i className="caret"> </i>
                </span>
              </a>
              <ul
                className="collapse nav"
                id="productMenu"
                data-bs-parent="#menu"
              >
                <li>
                  <ALink href="/orders" className="nav-link">
                    {' '}
                    <span className="link_text">All</span>
                  </ALink>
                </li>
                <li>
                  <ALink href="/orders/pending" className="nav-link">
                    {' '}
                    <span className="link_text">Pending</span>
                  </ALink>
                </li>
                <li>
                  <ALink href="/orders/processes" className="nav-link">
                    {' '}
                    <span className="link_text">Processed</span>
                  </ALink>
                </li>
                <li>
                  <ALink href="/orders/cancelled" className="nav-link">
                    {' '}
                    <span className="link_text">Cancelled</span>
                  </ALink>
                </li>
              </ul>
            </li>
            <li>
              <ALink href="/users" className="nav-link">
                <Icons name="users" />
                <span className="link_text">Customers</span>
              </ALink>
            </li>
            <li>
              <ALink href="/settings" className="nav-link">
                <Icons name="settings" />
                <span className="link_text">Settings</span>
              </ALink>
            </li>
            <li>
              <ALink href="/settings/payment-methods" className="nav-link">
                <Icons name="payments" />
                <span className="link_text">Payment Methods</span>
              </ALink>
            </li>
            <li>
              <ALink href="/logout" className="nav-link">
                <Icons name="logout" />
                <span className="link_text">Log Out</span>
              </ALink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
