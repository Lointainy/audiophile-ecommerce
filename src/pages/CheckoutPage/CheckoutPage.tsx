/* Styles */
import style from './CheckoutPage.module.scss'

/* Components */
import { BackButton, CheckoutForm, SummaryField } from '@components'

const CheckoutPage: React.FC = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <form className={style.page} onSubmit={handleSubmit}>
      <BackButton />
      <CheckoutForm />
      <SummaryField />
    </form>
  )
}
export default CheckoutPage
