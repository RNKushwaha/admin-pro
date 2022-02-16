import { default as NextImage } from 'next/image'

const Image = ({
  src,
  alt = 'image',
  width = null,
  height = null,
  ...rest
}): JSX.Element => {
  const extraProps: any = {}
  if (width) extraProps.width = width
  if (height) extraProps.height = height

  if (!width && !height) {
    extraProps.layout = 'fill'
  } else {
    extraProps.layout = 'responsive'
  }

  return <NextImage src={src} alt={alt} {...extraProps} {...rest} />
}

export default Image
