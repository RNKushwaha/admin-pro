import { copyright } from '@/constants/common'
import Copyright from './Copyright'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="float-start fw-light f12">
        {year} &copy; {copyright?.site?.label}
      </p>
      {copyright?.developer?.enabled && (
        <p className="float-end fw-light f12">
          {copyright?.developer?.legend} <Copyright />
        </p>
      )}
    </div>
  )
}
