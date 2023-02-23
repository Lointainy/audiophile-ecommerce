/* Styles */
import style from './FormRadio.module.scss'

const FormRadio: React.FC = (props) => {
  const { label, onChange, ...inputProps } = props

  const isSelected = (value) => props.payment == value

  return (
    <label className={style.field} style={{ gridArea: props.value }}>
      <input {...inputProps} checked={isSelected(props.value)} onChange={onChange} className={style.input} />
      <span className={style.checkmark}></span>
      <span className={style.label}>{label}</span>
    </label>
  )
}
export default FormRadio
