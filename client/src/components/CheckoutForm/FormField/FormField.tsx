type Props = {
  gridArea: string
  label: string
  id: string
  value: string
  placeholder: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

import style from './FormField.module.scss'

const FormField: React.FC<Props> = ({ gridArea, label, id, value, placeholder, handleChange }) => {
  return (
    <label className={style.area} style={{ gridArea: gridArea }}>
      <span className={style.label}>{label}</span>
      <input
        className={style.input}
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  )
}
export default FormField
