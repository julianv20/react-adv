import styles from '../styles/styles.module.css'
import useProduct from '../hooks/UseProduct'
import { createContext } from 'react'
import { Product, ProductContextProps } from '../interfaces/interfaces'

interface Props {
  product: Product
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, className, style, children }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
