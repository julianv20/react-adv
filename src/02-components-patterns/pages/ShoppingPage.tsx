import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { ProdutButtons } from '../components/ProdutButtons'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
}

export const products: Product[] = [product1, product2]

export interface ProductInCart extends Product {
  count: number
}

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProdutButtons className="custom-buttons" />
              <button onClick={() => reset()}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              <span>{count}</span>
              <span>{isMaxCountReached}</span>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )}
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
