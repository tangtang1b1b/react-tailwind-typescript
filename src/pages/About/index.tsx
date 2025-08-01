const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">關於我們</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">我們的願景</h2>
          <p className="text-gray-600 mb-4">
            我們致力於打造最優質的網頁應用程式，使用最新的技術棧來提供卓越的用戶體驗。
            我們的團隊由經驗豐富的開發者組成，專精於現代化的前端開發技術。
          </p>
          <p className="text-gray-600">
            透過 React、TypeScript 和 Tailwind CSS 的強大組合，我們能夠快速開發出
            既美觀又功能完整的網站應用程式。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">技術專長</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• React & TypeScript 開發</li>
              <li>• 響應式網頁設計</li>
              <li>• 現代化 CSS 框架</li>
              <li>• 前端效能優化</li>
              <li>• 使用者體驗設計</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600">服務項目</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 網站開發與設計</li>
              <li>• 單頁應用程式 (SPA)</li>
              <li>• 電商平台開發</li>
              <li>• 後台管理系統</li>
              <li>• 技術諮詢服務</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
