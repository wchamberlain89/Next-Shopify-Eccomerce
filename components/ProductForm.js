import { useState, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOptions'
import { CartContext } from '../context/shopContext'

const ProductForm = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map(variant => {
    const allOptions = {}

    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: variant.node.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price,
      variantQuantity: 1
    }
  })

  const defaultOptions = {}

  product.options.map(item => {
    defaultOptions[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultOptions)

  const setOptions = (name, value) => {
    setSelectedOptions(( prevState ) => ({ ...prevState, [name]: value }))

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-2/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-6">{formatter.format(product.variants.edges[0].node.price)}</span>
      {
        product.options.map(({ name, values }) => (
          <ProductOptions 
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
          />
        ))
      }
      <button className="bg-black rounded-lg text-white px-2 py-3 hover:bg-gray-800"
        onClick={() => {
          addToCart(selectedVariant)
        }}
      >Add To Cart</button>
    </div>
  );
};

export default ProductForm;