import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  name: string
  label?: string
  error: any
  register: any
  validation?: any
  id?: string
  className?: string
  onChange?: any
  onBlur?: any
  onFocus?: any
  InputProps?: any
  disabled?: string
  noValidate?: boolean
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  hideError?: boolean
}

const CheckBox = ({
  name,
  register,
  validation = {},
  label = '',
  className = '',
  error = '',
  hideError = false,
  ...rest
}: Props): React.ReactElement => {
  const id1 = rest?.id || uuidv4()
  const [id, setID] = useState('')

  useEffect(() => {
    setID(id1)
  }, [])

  return (
    <>
      <input
        className={`form-check-input ${className ? className : ''} ${
          error?.message ? 'is-invalid' : ''
        }`}
        type="checkbox"
        id={id}
        name={name}
        {...rest}
        {...register(name, validation || {})}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
      {!hideError && error && error?.message && (
        <div className="invalid-feedback">{error?.message}</div>
      )}
    </>
  )
}

export default CheckBox
