import React, { useState } from 'react'

/* Styles */
import style from './CheckoutForm.module.scss'

/* Components */
import FormField from './FormField/FormField'

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
      <div className={`${style.list} ${style.billing}`}>
        <FormField
          gridArea={'name'}
          label={'name'}
          id={'name'}
          value={form.name}
          placeholder={'Alexei Ward'}
          handleChange={handleChange}
        />
        <FormField
          gridArea={'email'}
          label={'email address'}
          id={'email'}
          value={form.email}
          placeholder={'alexei@mail.com'}
          handleChange={handleChange}
        />
        <FormField
          gridArea={'phone'}
          label={'phone number'}
          id={'phone'}
          value={form.phone}
          placeholder={'+1 202-555-0136'}
          handleChange={handleChange}
        />
      </div>
      <h3 className={style.title}>shipping info</h3>
      <div className={`${style.list} ${style.shipping}`}>
        <FormField
          gridArea={'address'}
          label={'address'}
          id={'address'}
          value={form.address}
          placeholder={'1137 Williams Avenue'}
          handleChange={handleChange}
        />
        <FormField
          gridArea={'code'}
          label={'ZIP code'}
          id={'code'}
          value={form.code}
          placeholder={'10001'}
          handleChange={handleChange}
        />
        <FormField
          gridArea={'city'}
          label={'City'}
          id={'city'}
          value={form.city}
          placeholder={'New York'}
          handleChange={handleChange}
        />
        <FormField
          gridArea={'country'}
          label={'country'}
          id={'country'}
          value={form.country}
          placeholder={'United States'}
          handleChange={handleChange}
        />
      </div>
      <h3 className={style.title}>payment details</h3>
      input - label id value area handleChange radio - type name
    </div>
  )
}
export default CheckoutForm
