import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import {
  Product,
  ProductContextProps,
  onChangeArgs
} from '../interfaces/interfaces'
import UseProduct from '../hooks/useProduct'

interface Props {
  product: Product
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({
  product,
  className,
  style,
  children,
  onChange,
  value
}: Props) => {
  const { counter, increaseBy } = UseProduct({ onChange, product, value })

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
