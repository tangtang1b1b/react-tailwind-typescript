import { Link } from 'react-router-dom'
import reactImage from '../assets/react.svg'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
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
                <Link to="/about" className="transition-colors hover:text-blue-200">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-blue-200">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
