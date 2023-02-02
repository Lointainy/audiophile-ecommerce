import { useState } from 'react'

/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm, SummaryField } from '@components'

const CheckoutPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    city: '',
    country: '',
    payment: '',
    eNumber: '',
    ePin: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type == 'radio') {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(form)
  }
  return (
    <form className={style.page} onSubmit={handleSubmit}>
      <BackButton />
      <CheckoutForm form={form} handleChange={handleChange} />
      <SummaryField />
    </form>
  )
}
export default CheckoutPage
