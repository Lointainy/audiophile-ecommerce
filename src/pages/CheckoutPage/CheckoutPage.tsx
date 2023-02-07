import { useState } from 'react'

/* Store */
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { OPEN_MODAL } from '@store/reducers/modalSlice'

/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm, SummaryField, EmptyCart } from '@components'

const CheckoutPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { order } = useAppSelector((store) => store.cart)

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
    <div className={style.page}>
      <BackButton />
      {order.length ? (
        <form className={style.form} onSubmit={handleSubmit}>
          <CheckoutForm form={form} handleChange={handleChange} />
          <SummaryField />
        </form>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
export default CheckoutPage
