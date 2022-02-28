import ReactIcon from '@/hoc/ReactIcon'
import { MdLightMode, MdNightlight } from '@/components/shared/Icons'

type Props = {
  darkMode: boolean
  handleDarkMode(mode: boolean): void
  color1: string
  color2: string
}

const ThemeChanger = (props: Props) => {
  return (
    <>
      {!props.darkMode && (
        <a
          className="mt-0"
          role="button"
          onClick={() => props.handleDarkMode(true)}
          title="Enable Dark Mode"
        >
          <ReactIcon icon={<MdLightMode size={20} color={props.color1} />} />
        </a>
      )}
      {props.darkMode && (
        <a
          className="mt-0"
          role="button"
          onClick={() => props.handleDarkMode(false)}
          title="Enable Light Mode"
        >
          <ReactIcon icon={<MdNightlight size={20} color={props.color2} />} />
        </a>
      )}
    </>
  )
}

export default ThemeChanger
