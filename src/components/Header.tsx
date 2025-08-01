import { Link } from 'react-router-dom';
import reactImage from '../assets/react.svg';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between dev-blue items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              <img src={reactImage} alt="React Logo" className="h-8 inline" />
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-6 list-none">
              <li>
                <Link to="/" className="hover:text-blue-200 transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-200 transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-200 transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
