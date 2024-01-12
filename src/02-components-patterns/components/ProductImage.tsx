import { useContext } from 'react'
import notImage from '../assets/no-image.jpg'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export const ProductImage = () => {
  const { product } = useContext(ProductContext)

  return (
    <img
      className={styles.productImg}
      src={product.img ? product.img : notImage}
      alt="Coffe Mug"
    />
  )
}
