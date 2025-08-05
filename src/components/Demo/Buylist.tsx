import { useAppDispatch } from '@/hooks/redux'
import { addToCart } from '@/store/cart'
import type { CartItem } from '@/store/cart'

const Buylist = () => {
  const dispatch = useAppDispatch()

  const products = [
    { id: '1', name: 'Apple iPhone 14', price: 25900, quantity: 1 },
    { id: '2', name: 'Samsung Galaxy S23', price: 23900, quantity: 1 },
    { id: '3', name: 'Sony WH-1000XM5 Headphones', price: 10990, quantity: 1 },
    { id: '4', name: 'Apple MacBook Air M2', price: 34900, quantity: 1 },
    { id: '5', name: 'Logitech MX Master 3S Mouse', price: 2990, quantity: 1 },
    { id: '6', name: 'Nintendo Switch OLED', price: 9990, quantity: 1 },
    { id: '7', name: 'Dyson V12 Detect Slim', price: 18900, quantity: 1 },
    { id: '8', name: 'ASUS ROG Strix G16 Laptop', price: 42900, quantity: 1 },
    { id: '9', name: 'GoPro HERO12 Black', price: 13990, quantity: 1 },
    { id: '10', name: 'Kindle Paperwhite 11th Gen', price: 4990, quantity: 1 },
  ]

  const handleAddToCart = (item: CartItem) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    }
    dispatch(addToCart(cartItem))
  }

  return (
    <div className="grid grid-cols-1 gap-7 bg-black p-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="flex aspect-video flex-col items-start justify-between rounded-lg bg-white p-4 shadow-lg">
          <div className="">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-lg">${product.price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="flex items-center justify-center rounded bg-gray-600 px-3 py-2 text-white duration-300 hover:bg-black"
            aria-label="Add to Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 9M7 13V6h13"
              />
            </svg>
            加入購物車
          </button>
        </div>
      ))}
    </div>
  )
}

export default Buylist
