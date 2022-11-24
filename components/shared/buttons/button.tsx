type IProps = {
  label: string
  type?: 'submit' | 'reset' | 'button' | undefined
  width?: undefined | string
  size?: 'lg' | 'sm' | 'xs' | undefined
  color?: 'primary' | 'secondary' | undefined
  className?: undefined | string
}

const Button = ({
  label,
  type,
  width,
  size,
  color,
  className = undefined,
  ...rest
}: IProps): JSX.Element => {
  let btnClass = ['btn', className].filter(Boolean).join(' ')
  if (width === 'full') btnClass += ' w-100'
  if (size) btnClass += ' btn-' + size

  if (color) btnClass += ' btn-' + color
  else btnClass += ' btn-primary'

  return (
    <>
      <button className={btnClass} type={type} {...rest}>
        {label}
      </button>
    </>
  )
}

export default Button
