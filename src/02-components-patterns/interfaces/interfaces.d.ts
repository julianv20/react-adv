export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductButtonsProps {
  counter: number
  increaseBy: (value: number) => void
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface onChangeArgs {
  product: Product
  count: number
}
