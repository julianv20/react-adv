import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

interface Props {
  className?: string
  title?: string
}

export const ProductTitle = ({ className, title }: Props) => {
  const { product } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  )
}
