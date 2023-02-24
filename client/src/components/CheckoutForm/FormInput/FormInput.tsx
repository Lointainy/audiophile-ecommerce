import { PropsWithChildren, useState } from 'react'

/* Styles */
import style from './FormInput.module.scss'

/* Types */
interface Props extends PropsWithChildren {
  name: string
  type: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  pattern?: string
  label: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<Props> = (props) => {
  const [focused, setFocused] = useState<boolean>(false)

  let focus: string = focused.toString()

  const { label, errorMessage, onChange, ...inputProps } = props

  const handleFocus = (): void => {
    setFocused(true)
  }

  return (
    <div className={style.field} style={{ gridArea: props.name }}>
      <input
        {...inputProps}
        onChange={(e) => onChange(e)}
        onBlur={handleFocus}
        focused={focus}
        className={style.input}
      />
      <label className={style.label}>{label}</label>
      <span className={style.error}>{errorMessage}</span>
    </div>
  )
}
export default FormInput
