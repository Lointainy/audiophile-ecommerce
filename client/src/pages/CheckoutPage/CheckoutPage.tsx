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

  const [values, setValues] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    payment: 'emoney',
    eNumber: '',
    ePin: '',
  })

  const fields = [
    {
      id: 1,
      title: 'billing details',
      class: 'billing',
      inputs: [
        {
          id: 1,
          name: 'username',
          type: 'text',
          placeholder: 'Alexei Ward',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^[A-Za-z]{3,24}$',
          label: 'Name',
        },
        {
          id: 2,
          name: 'email',
          type: 'text',
          placeholder: 'alexeiward@mail.com',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^([A-Z|a-z|0-9](.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((.){0,1}[A-Z|a-z|0-9]){2}.[a-z]{2,3}$',
          label: 'Email Address',
        },
        {
          id: 3,
          name: 'phoneNumber',
          type: 'tel',
          placeholder: '+1 202-555-0136',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^s*(?:+?(d{1,3}))?([-. (]*(d{3})[-. )]*)?((d{3})[-. ]*(d{2,4})(?:[-.x ]*(d+))?)s*$',
          label: 'Phone Number',
        },
      ],
    },
    {
      id: 2,
      title: 'shipping info',
      class: 'shipping',
      inputs: [
        {
          id: 1,
          name: 'address',
          type: 'text',
          placeholder: '1137 Williams Avenue',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^[A-Za-z]{3,24}$',
          label: 'Your Address',
        },
        {
          id: 2,
          name: 'zipCode',
          type: 'text',
          placeholder: '10001',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^[0-9]{5}$',
          label: 'ZIP Code',
        },
        {
          id: 3,
          name: 'city',
          type: 'text',
          placeholder: 'New York',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^[A-Za-z]{3,24}$',
          label: 'City',
        },
        {
          id: 4,
          name: 'country',
          type: 'text',
          placeholder: 'United States',
          errorMessage: 'wrong format',
          required: true,
          pattern: '^[A-Za-z]{3,24}$',
          label: 'country',
        },
      ],
    },
    {
      id: 3,
      title: 'payment details',
      class: 'payment',
      inputs: [
        {
          id: 1,
          name: 'payment',
          value: 'emoney',
          type: 'radio',
          label: 'e-Money',
        },
        {
          id: 2,
          name: 'payment',
          value: 'cash',
          type: 'radio',
          label: 'Cash on Delivery',
        },
      ],
    },
  ]

  const options = [
    {
      id: 1,
      name: 'eNumber',
      type: 'text',
      placeholder: '238521993',
      errorMessage: 'wrong format',
      required: true,
      pattern: '^[0-9]{9}$',
      label: 'e-money number',
    },
    {
      id: 2,
      name: 'ePin',
      type: 'text',
      placeholder: '6878',
      errorMessage: 'wrong format',
      required: true,
      pattern: '^[0-9]{4}$',
      label: 'e-money PIN',
    },
  ]

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(OPEN_MODAL('CheckoutOrder'))
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className={style.page}>
      <BackButton />

      {order.length ? (
        <form className={style.form} onSubmit={handleSubmit}>
          <CheckoutForm fields={fields} values={values} onChange={onChange} options={options} />
          <SummaryField />
        </form>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
export default CheckoutPage
