/* Styles */
import style from './CheckoutForm.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/* Components */
import FormInput from './FormInput/FormInput'
import FormRadio from './FormRadio/FormRadio'

const CheckoutForm = (props) => {
  const { fields, values, options, onChange } = props

  return (
    <div className={style.form}>
      <h3 className={style.title}>Checkout</h3>

      {fields.slice(0, 2).map((field) => (
        <div key={field.id} className={`${style.section} ${style[field.class]}`}>
          <h6 className={style.subtitle}>{field.title}</h6>

          {field.inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
        </div>
      ))}

      {fields.slice(2, 3).map((field) => (
        <div key={field.id} className={`${style.section} ${style[field.class]}`}>
          <h6 className={style.subtitle}>{field.title}</h6>

          {field.inputs.map((input) => (
            <FormRadio key={input.id} {...input} payment={values.payment} onChange={onChange} />
          ))}

          {values.payment == 'emoney' &&
            options.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}

          {values.payment == 'cash' && (
            <div className={style.info}>
              <Icon icon="truck-ramp-box" className={style.icon} />
              <p className={style.desc}>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
                residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default CheckoutForm
