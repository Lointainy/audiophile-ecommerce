/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm } from '@components'

const CheckoutPage: React.FC = () => {
  return (
    <div className={style.page}>
      <BackButton />
      <CheckoutForm />
    </div>
  )
}
export default CheckoutPage
