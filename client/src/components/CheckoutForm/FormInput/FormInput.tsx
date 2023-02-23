import { useState } from 'react'

/* Styles */
import style from './FormInput.module.scss'

const FormInput: React.FC = (props) => {
  const [focused, setFocused] = useState(false)

  const { label, errorMessage, onChange, ...inputProps } = props

  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <div className={style.field} style={{ gridArea: props.name }}>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className={style.input}
      />
      <label className={style.label}>{label}</label>
      <span className={style.error}>{errorMessage}</span>
    </div>
  )
}
export default FormInput
