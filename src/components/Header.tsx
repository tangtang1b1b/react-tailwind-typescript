import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-blue-200 transition-colors">
              My App
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
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
