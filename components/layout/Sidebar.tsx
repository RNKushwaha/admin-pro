import { useTranslation } from 'react-i18next'
import ALink from '@/components/shared/ALink'
import {
  MdArticle,
  MdCategory,
  MdDashboard,
  MdGroups,
  MdLocalOffer,
  MdLogout,
  MdOutlinePayments,
  MdPermMedia,
  MdSettings,
  MdShoppingBag,
  MdShoppingCart,
} from '@/components/shared/Icons'
import ReactIcon from '@/hoc/ReactIcon'

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
                <ReactIcon icon={<MdDashboard />} />
                <span className="link_text">Dashboard</span>
              </ALink>
            </li>
            <li>
              <ALink href="/pages" className="nav-link">
                <ReactIcon icon={<MdArticle />} />
                <span className="link_text">Pages</span>
              </ALink>
            </li>
            <li>
              <ALink href="/media" className="nav-link">
                <ReactIcon icon={<MdPermMedia />} />
                <span className="link_text">Media</span>
              </ALink>
            </li>
            <li>
              <ALink href="/categories" className="nav-link">
                <ReactIcon icon={<MdCategory />} />
                <span className="link_text">Categories</span>
              </ALink>
            </li>
            <li>
              <ALink href="/orders" className="nav-link">
                <ReactIcon icon={<MdShoppingBag />} />
                <span className="link_text">Products</span>
              </ALink>
            </li>
            <li>
              <ALink href="/tags" className="nav-link">
                <ReactIcon icon={<MdLocalOffer />} />
                <span className="link_text">Tags</span>
              </ALink>
            </li>
            <li className="hasMenu">
              <a
                href="#productMenu"
                className="nav-link"
                data-bs-toggle="collapse"
              >
                <ReactIcon icon={<MdShoppingCart />} />
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
                <ReactIcon icon={<MdGroups />} />
                <span className="link_text">Customers</span>
              </ALink>
            </li>
            <li>
              <ALink href="/settings" className="nav-link">
                <ReactIcon icon={<MdSettings />} />
                <span className="link_text">Settings</span>
              </ALink>
            </li>
            <li>
              <ALink href="/settings/payment-methods" className="nav-link">
                <ReactIcon icon={<MdOutlinePayments />} />
                <span className="link_text">Payment Methods</span>
              </ALink>
            </li>
            <li>
              <ALink href="/logout" className="nav-link">
                <ReactIcon icon={<MdLogout />} />
                <span className="link_text">Log Out</span>
              </ALink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
