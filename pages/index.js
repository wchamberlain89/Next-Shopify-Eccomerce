import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'

export default function Home({ products }) {
  console.log("Products on Home page are", products)

  return (
    <div className='text-3xl'>Hello from Shopify Next</div>
  )
}

export const getStaticProps = async () => {
  const products = await getProductsInCollection()

  return {
    props: { products }
  }
}