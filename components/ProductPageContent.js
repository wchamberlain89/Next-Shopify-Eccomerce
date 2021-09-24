import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import RecommendedList from './RecommendedList'

const ProductPageContent = ({ product }) => {

  const images = []

  product.images.edges.map((image, index) => {
    images.push(
      <SwiperSlide key={`slide-${index}`}>
        <Image src={image.node.originalSrc} alt={image.node.altText} layout='fill' objectFit='cover' />
      </SwiperSlide>
    )
  })

  return (
  <>
    <div className={`flex flex-col justify-center items-center space-y-8 
                     md:flex-row md:items-start md:space-y-0 md:space-x-4 
                     lg:space-x-8 max-w-6xl w-11/12 mx-auto`}>
      <div className="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
        <div className="relative h-96 w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000'}}
            navigation
            pagination={{ clickable: true}}
            className='h-96 rouded-2xl'
            loop='true'
          >
            { images }  
          </Swiper> 
        </div>  
      </div>
      <ProductForm product={product} /> 
    </div>
    <p className="px-6 pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl mx-auto text-center text-3xl">
      {product.description}
    </p>
    <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
  </>
  );
};

export default ProductPageContent;
