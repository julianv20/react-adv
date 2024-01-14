import { useContext } from 'react'
import notImage from '../assets/no-image.jpg'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

interface Props {
  className?: string
}

export const ProductImage = ({ className }: Props) => {
  const { product } = useContext(ProductContext)

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={product.img ? product.img : notImage}
      alt="Coffe Mug"
    />
  )
}
