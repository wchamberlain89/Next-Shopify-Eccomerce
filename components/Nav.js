import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from '../components/MiniCart'

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0

  // Sets total quantity of all items in cart
  cart.map(item => (cartQuantity += item?.variantQuantity))

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              Shopify + Next.js
            </span> 
          </a>
        </Link>
        <a 
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart}/>
      </div>
    </header>
  );
};

export default Nav;