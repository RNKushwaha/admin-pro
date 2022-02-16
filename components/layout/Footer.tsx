import Copyright from './Copyright'

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <p className="float-start fw-light f12">{year} &copy; Ultimate</p>
      <p className="float-end fw-light f12">
        Design & Developed By: <Copyright />
      </p>
    </div>
  )
}
