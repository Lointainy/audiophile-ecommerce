import React, { useState } from 'react'

/* Styles */
import style from './CheckoutForm.module.scss'

/* Components */

const CheckoutForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    city: '',
    country: '',
    payment: '',
    number: '',
    pin: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    console.log(form.payment)
  }

  return (
    <div className={style.form}>
      <h3 className={style.title}>Billing Details</h3>
      <div className={style.list}>
        <label htmlFor="">
          <span>Name</span>
          <input type="text" value="" id="" onChange={handleChange} />
          input - label id value area handleChange radio - type name
        </label>
      </div>
      <h3 className={style.title}>shipping info</h3>
      <h3 className={style.title}>payment details</h3>
    </div>
  )
}
export default CheckoutForm
