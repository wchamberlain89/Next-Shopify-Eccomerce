import { getAllProducts, getProduct } from '../../lib/shopify'
import ProductPageContent from '../../components/ProductPageContent'

const ProductPage = ({ product }) => {
  return (
    <div className="min-h-screen py-12 pt-20">
      <ProductPageContent product={product} />  
    </div>
  );
};

export const getStaticPaths = async () => {
  const products = await getAllProducts()

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return { params: { product } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const product = await getProduct(params.product)

  return { props: { product } }
}

export default ProductPage