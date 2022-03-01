import { isEmpty } from '@/utils'
import { copyright } from '@/constants/common'

export default function Copyright(): JSX.Element {
  if (isEmpty(copyright?.developer?.label)) return null

  return (
    <a href={copyright?.developer?.link} target="_blank">
      {copyright?.developer?.label}
    </a>
  )
}
