import { useTranslation } from 'next-i18next'
import ReactIcon from '@/hoc/ReactIcon'
import { MdLightMode, MdNightlight } from '@/components/shared/Icons'

type Props = {
  darkMode: boolean
  handleDarkMode(mode: boolean): void
  color1: string
  color2: string
}

const ThemeChanger = (props: Props) => {
  const { t } = useTranslation('menu')

  return (
    <>
      {!props.darkMode ? (
        <a
          className="mt-0"
          role="button"
          onClick={() => props.handleDarkMode(true)}
          title={t('Enable Dark Mode')}
        >
          <ReactIcon icon={<MdLightMode size={20} color={props.color1} />} />
        </a>
      ) : (
        <a
          className="mt-0"
          role="button"
          onClick={() => props.handleDarkMode(false)}
          title={t('Enable Light Mode')}
        >
          <ReactIcon icon={<MdNightlight size={20} color={props.color2} />} />
        </a>
      )}
    </>
  )
}

export default ThemeChanger
