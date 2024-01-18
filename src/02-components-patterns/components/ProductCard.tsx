import styles from '../styles/styles.module.css'
import { createContext } from 'react'
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs
} from '../interfaces/interfaces'
import UseProduct from '../hooks/useProduct'

interface Props {
  product: Product
  className?: string
  style?: React.CSSProperties
  children: (args: ProductCardHandlers) => JSX.Element
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({
  product,
  className,
  style,
  children,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, maxCount, reset } =
    UseProduct({
      onChange,
      product,
      value,
      initialValues
    })

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}
