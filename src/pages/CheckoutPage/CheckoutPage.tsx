/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm, SummaryField } from '@components'

const CheckoutPage: React.FC = () => {
  return (
    <div className={style.page}>
      <BackButton />
      <CheckoutForm />
      <SummaryField />
    </div>
  )
}
export default CheckoutPage
