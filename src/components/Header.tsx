import { Link } from 'react-router-dom'
import reactImage from '@/assets/react.svg'
import Cart from '@/components/Home/Cart'

const Header = () => {
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
                <Cart />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
