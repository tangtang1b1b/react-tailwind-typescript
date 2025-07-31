const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">關於我們</h3>
            <p className="text-gray-300">
              這是一個使用 React + TypeScript + Tailwind CSS 建立的現代化網站。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">隱私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@example.com</p>
              <p>電話: (02) 1234-5678</p>
              <p>地址: 台北市信義區信義路五段7號</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
