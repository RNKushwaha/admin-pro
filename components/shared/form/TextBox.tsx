type Props = {
  name: string
  placeholder?: string
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
  type?: 'text' | 'password' | 'email' | 'number' | 'date' | 'datetime'
}

const TextBox = ({
  name,
  register,
  type = 'text',
  validation = {},
  className = '',
  error = '',
  hideError = false,
  ...rest
}: Props): React.ReactElement => {
  return (
    <>
      <input
        name={name}
        type={type}
        className={`form-control ${className ? className : ''} ${
          error?.message ? 'is-invalid' : ''
        }`}
        {...rest}
        {...register(name, validation || {})}
      />

      {!hideError && error && error?.message && (
        <div className="invalid-feedback">{error?.message}</div>
      )}
    </>
  )
}

export default TextBox
