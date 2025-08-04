const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">關於我們</h3>
            <p className="text-gray-300">這是一個使用 React + TypeScript + Tailwind CSS 建立的網站。</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">快速連結</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  隱私政策
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  服務條款
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  常見問題
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">聯絡資訊</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@example.com</p>
              <p>電話: (02) 1234-5678</p>
              <p>地址: 台北市木柵區動物園路</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2025 My App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
