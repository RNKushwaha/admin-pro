import Link from 'next/link'
import { localesCustom } from '@/utils/constants/common'

type Props = {
  darkMode: boolean
  locale: string
  asPath: string
  colorLight: string
  colorDark: string
}

const LanguageChanger = (props: Props) => {
  return (
    <>
      <div className="dropdown text-start">
        <a
          role="button"
          className={`p-2 pe-4 dropdown-toggle ${
            props.darkMode ? props.colorDark : props.colorLight
          }`}
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {localesCustom &&
            localesCustom.map((lang) =>
              lang.key === props.locale ? lang.label : ''
            )}
        </a>
        <ul
          className={`dropdown-menu ${
            props.darkMode ? 'dropdown-menu-dark' : ''
          }`}
          aria-labelledby="dropdownUser2"
        >
          {localesCustom &&
            localesCustom.map((lang) => (
              <li key={lang.key}>
                <Link
                  href={props.asPath}
                  locale={lang.key}
                  passHref
                  prefetch={false}
                >
                  <a
                    className={`dropdown-item ${
                      lang.key === props.locale ? 'active' : ''
                    }`}
                  >
                    {lang.label}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default LanguageChanger
