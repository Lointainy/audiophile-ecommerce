/* Styles */
import style from './FormRadio.module.scss'

/* Types */
import { PropsWithChildren } from 'react'
interface Props extends PropsWithChildren {
  name: string
  type: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  pattern?: string
  label: string
  value?: string
  payment: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormRadio: React.FC<Props> = (props) => {
  const { label, onChange, ...inputProps } = props

  const isSelected = (value: string | undefined) => props.payment == value

  return (
    <label className={style.field} style={{ gridArea: props.value }}>
      <input {...inputProps} checked={isSelected(props.value)} onChange={(e) => onChange(e)} className={style.input} />
      <span className={style.checkmark}></span>
      <span className={style.label}>{label}</span>
    </label>
  )
}
export default FormRadio
