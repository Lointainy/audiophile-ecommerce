/* Hooks */
import { useMediaQuery } from '@hooks/useMediaQuery'

/* Styles */
import style from './ProductInfo.module.scss'

/* Icons */
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const ProductInfo: React.FC = ({ product }) => {
  const {
    mediaQuery: { name: picSize },
  } = useMediaQuery()

  return (
    <div className={style.info}>
      <div className={style.field}>
        {product.categoryImage ? (
          <div className={style.img}>
            <img src={`../${product.categoryImage[picSize]}`} alt="" />
          </div>
        ) : (
          <div className={style.img}></div>
        )}
      </div>
      <div className={style.content}>
        <div className={style.title}>
          {product.new ? <span className={style.subtitle}>new product</span> : ''}
          <h2 className={style.name}>{product.name}</h2>
        </div>

        <p className={style.desc}>{product.description}</p>
        <span className={style.price}>$ {product.price}</span>
        <div className={style.quantity}>
          <button className={style.btn}>
            <Icon icon="plus" />
          </button>
          <input type="number" name="" id="" className={style.number} />
          <button className={style.btn}>
            <Icon icon="minus" />
          </button>
        </div>
        <button className={style.add}>add to cart</button>
      </div>
    </div>
  )
}

export default ProductInfo
