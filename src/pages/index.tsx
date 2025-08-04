import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

const HomePage = () => {
  const currentNum = useAppSelector((state) => state.counter.currentNum)

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-10 bg-gray-50 px-4 py-8 font-Noto md:flex-row">
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">目前計數器數值</h2>
          <p className="text-4xl font-bold text-blue-600">{currentNum}</p>
        </div>
        <Link to="/demo" className="text-3xl font-bold text-black duration-300 hover:text-gray-700">
          模板總攬
        </Link>
      </div>
    </div>
  )
}

export default HomePage
