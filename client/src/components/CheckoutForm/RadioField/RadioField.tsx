import style from './RadioField.module.scss'

type Props = {
  gridArea: string
  name: string
  label: string
  id: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioField: React.FC<Props> = ({ gridArea, name, id, value, handleChange, label }) => {
  return (
    <label className={style.field} style={{ gridArea: gridArea }}>
      <input className={style.input} type="radio" name={name} id={id} value={value} onChange={handleChange} />
      <span className={style.checkmark}></span>
      <span className={style.label}>{label}</span>
    </label>
  )
}
export default RadioField
