import dynamic from 'next/dynamic'

type IconProps = {
  name: string
  color?: string
  size?: number
}

const Icons = ({
  name,
  color = null,
  size = 16,
}: IconProps): React.ReactElement => {
  const IconComponent = dynamic(() => import('./' + name))
  let viewBox = 16
  if (
    [
      'dark',
      'light',
      'products',
      'chevron-down',
      'chevron-right',
      'phone',
      'pencil',
    ].includes(name)
  ) {
    viewBox = 24
  } else if (['incorrect', 'trash'].includes(name)) {
    viewBox = 20
  } else if (
    [
      'categories',
      'tags',
      'eye',
      'eyeoff',
      'login',
      'arrow-up',
      'arrow-down',
      'email',
      'mobile',
      'refresh',
      'backword',
      'forword',
    ].includes(name)
  ) {
    viewBox = 32
  } else if (['orders', 'payments', 'chevron-left', 'map'].includes(name)) {
    viewBox = 48
  } else if (['settings'].includes(name)) {
    viewBox = 50
  } else if (['pages'].includes(name)) {
    viewBox = 362
  } else if (['correct'].includes(name)) {
    viewBox = 196.887
  } else if (['logout'].includes(name)) {
    viewBox = 497.298
  } else if (['plus'].includes(name)) {
    viewBox = 485
  }

  return (
    <svg
      className={`me-2 ${color ? '' : 'bi'}`}
      fill={color}
      width={size}
      height={size}
      viewBox={`0 0 ${viewBox} ${viewBox}`}
    >
      <IconComponent />
    </svg>
  )
}

export default Icons
