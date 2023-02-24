/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './ProductInfo.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { PropsWithChildren, useState } from 'react'

/* Types */
import { Iproduct } from '@types'
interface Props extends PropsWithChildren {
  product: Iproduct
  addProduct: (quantity: number) => void
}

const ProductInfo: React.FC<Props> = ({ product, addProduct }) => {
  const [quantity, setQuantity] = useState(1)

  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  const handleQuantity = (name: string) => {
    if (name == 'inc') {
      quantity < 5 ? setQuantity(quantity + 1) : ''
    }
    if (name == 'dec') {
      quantity > 1 ? setQuantity(quantity - 1) : ''
    }
  }

  return (
    <div className={style.info}>
      {product.categoryImage ? (
        <div className={style.img}>
          <img src={`../${product.categoryImage[picSize]}`} alt="" />
        </div>
      ) : (
        <div className={style.img}></div>
      )}
      <div className={style.content}>
        <div className={style.title}>
          {product.new ? <span className={style.subtitle}>new product</span> : ''}
          <h2 className={style.name}>{product.name}</h2>
        </div>

        <p className={style.desc}>{product.description}</p>
        <span className={style.price}>$ {product.price}</span>
        <div className={style.quantity}>
          <button className={style.btn} name="dec" onClick={() => handleQuantity('dec')}>
            <Icon icon="minus" />
          </button>
          <span className={style.number}>{quantity}</span>
          <button className={style.btn} name="inc" onClick={() => handleQuantity('inc')}>
            <Icon icon="plus" />
          </button>
        </div>
        <button className={style.add} onClick={() => addProduct(quantity)}>
          add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductInfo
