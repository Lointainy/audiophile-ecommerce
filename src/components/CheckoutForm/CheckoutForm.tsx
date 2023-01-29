import { useState } from 'react'

/* Styles */
import style from './CheckoutForm.module.scss'

/* Components */
import FormField from './FormField/FormField'
import RadioField from './RadioField/RadioField'

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

  return (
    <div className={style.form}>
      <h6 className={style.title}>Billing Details</h6>

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

      <h6 className={style.title}>shipping info</h6>

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

      <h6 className={style.title}>payment details</h6>

      <div className={`${style.list} ${style.payment}`}>
        <span className={style.subtitle}>Payment method</span>
        <RadioField
          gridArea={'emoney'}
          name={'payment'}
          id={'emoney'}
          value={'e-Money'}
          handleChange={handleChange}
          label={'e-Money'}
        />
        <RadioField
          gridArea={'cash'}
          name={'payment'}
          id={'cash'}
          value={'Cash on Delivery'}
          handleChange={handleChange}
          label={'Cash on Delivery'}
        />
        {form.payment == 'e-Money' ? (
          <>
            <FormField
              gridArea={'enumber'}
              label={'e-Money Number'}
              id={'eNumber'}
              value={form.eNumber}
              placeholder={'238521993'}
              handleChange={handleChange}
            />
            <FormField
              gridArea={'epin'}
              label={'e-Money PIN'}
              id={'ePin'}
              value={form.ePin}
              placeholder={'2568'}
              handleChange={handleChange}
            />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default CheckoutForm
