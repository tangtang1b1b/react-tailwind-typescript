import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactImage from '../assets/react.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="bg-black text-gray-600 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="transition-colors hover:text-blue-200">
              <img src={reactImage} alt="React Logo" className="inline h-8" />
            </Link>
          </h1>
          <nav>
            <ul className="flex list-none gap-6">
              <li>
                <Link to="/about" className="transition-colors hover:text-white">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-white">
                  聯絡我們
                </Link>
              </li>
              <li>
                <div className="relative flex cursor-pointer items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-6 w-6 transition-colors hover:text-white"
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
                        className="absolute right-0 top-full mt-3 rounded-md bg-white p-3"
                      >
                        <p>123123</p>
                        <p>123123</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
