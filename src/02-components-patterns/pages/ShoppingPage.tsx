import { ProductCard } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImage'
import { ProductTitle } from '../components/ProductTitle'
import { ProdutButtons } from '../components/ProdutButtons'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProdutButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          className="bg-dark text-white"
          style={{
            backgroundColor: '#70D1F8',
            color: '#000'
          }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProdutButtons
            className="custom-buttons"
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          />
        </ProductCard>
      </div>
    </div>
  )
}
