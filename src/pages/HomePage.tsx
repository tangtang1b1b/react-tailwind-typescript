import { useState } from 'react';

const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">歡迎來到首頁</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">計數器範例</h2>
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors mb-4"
          >
            點擊次數: {count}
          </button>
          <p className="text-gray-600">
            這是一個使用 React Hook 的簡單計數器範例
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600">現代化的前端框架</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
            <p className="text-gray-600">型別安全的 JavaScript</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">實用優先的 CSS 框架</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
