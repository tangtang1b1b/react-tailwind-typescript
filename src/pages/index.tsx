import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';

const HomePage = () => {
  const currentNum = useAppSelector((state) => state.counter.currentNum);

  return (
    <div className="mx-auto h-full w-full bg-gray-50 px-4 py-8 font-Noto flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">目前計數器數值</h2>
          <p className="text-4xl font-bold text-blue-600">{currentNum}</p>
        </div>
        <Link to="/demo" className="text-black hover:text-gray-700 duration-300 font-bold text-3xl">
          模板總攬
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
