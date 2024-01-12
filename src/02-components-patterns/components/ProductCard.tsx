import styles from '../styles/styles.module.css'
import useProduct from '../hooks/UseProduct'
import { createContext } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProdutButtons } from './ProdutButtons'

interface Props {
  product: Product
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div className={styles.productCard}>
        <ProductImage />
        <ProductTitle />
        <ProdutButtons />
      </div>
    </Provider>
  )
}
