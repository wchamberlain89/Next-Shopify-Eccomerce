import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductList from '../components/ProductList'

export default function Home({ products }) {

  return (
    <div className='text-3xl'>
      <ProductList products={products} />
    </div>
  )
}

export const getStaticProps = async () => {
  const products = await getProductsInCollection()

  return {
    props: { products }
  }
}