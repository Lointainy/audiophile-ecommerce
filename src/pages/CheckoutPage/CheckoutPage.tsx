import { useState } from 'react'

/* Store */
import { useAppDispatch } from '@hooks/useRedux'

/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm, SummaryField } from '@components'
import { OPEN_MODAL } from '@/store/reducers/modalSlice'

const CheckoutPage: React.FC = () => {
  const dispatch = useAppDispatch()
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
    dispatch(OPEN_MODAL('CheckoutOrder'))
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
