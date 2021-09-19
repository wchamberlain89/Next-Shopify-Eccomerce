import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
      <div className="bg-white max-w-2xl mx-auto py-16 px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-xl font-extrabold text-gray-900 mb-6">Products</h2>
        <div className="grid gap-y-10 gap-x-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map( product => <ProductCard product={product} key={product.node.id}/> )
          }
        </div>
    </div>
  );
};

export default ProductList;