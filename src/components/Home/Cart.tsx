import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { removeCartItem } from '@/store/cart'

const Cart = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const currentCart = useAppSelector((state) => state.cart.items)
  const currentTotalAmount = useAppSelector((state) => state.cart.totalAmount)
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])
  return (
    <div className="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`mr-1 h-6 w-6 cursor-pointer transition-colors hover:text-white ${currentCart.length === 0 ? 'text-gray-600' : 'text-blue-500'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.7L21 13M7 13V6h13"
        />
      </svg>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-full mt-3 rounded-md bg-white p-3 shadow-lg"
          >
            <div className="flex w-full flex-col gap-5">
              <div className="w-full text-center font-bold">購物車</div>
              <div className="flex gap-5">
                <p className="w-20 text-center">名稱</p>
                <p className="w-10 text-center">價格</p>
                <p className="w-10 text-center">數量</p>
                <p className="w-10 text-center"></p>
              </div>
            </div>
            <ul className="scrollbar-thin max-h-60 w-full overflow-auto">
              {currentCart.length === 0 ? (
                <li className="mt-3 text-center text-gray-500">購物車是空的</li>
              ) : (
                currentCart.map((item) => (
                  <li key={item.id} className="flex items-center gap-5 py-2">
                    <span className="w-20 text-center">{item.name}</span>
                    <span className="w-10 text-center">${item.price * item.quantity}</span>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <span onClick={() => dispatch(removeCartItem(item.id))} className="w-10 cursor-pointer text-center">
                      X
                    </span>
                  </li>
                ))
              )}
            </ul>
            {currentCart.length === 0 ? null : <div className="text-end">總價 : ${currentTotalAmount}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Cart
