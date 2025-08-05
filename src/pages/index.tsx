import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks/redux'

const HomePage = () => {
  const currentNum = useAppSelector((state) => state.counter.currentNum)

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-10 bg-black px-4 py-8 font-Noto md:flex-row">
      <div className="flex flex-col items-center gap-6">
        <div className="rounded-lg bg-black p-6 text-center shadow-card">
          <h2 className="mb-2 text-xl font-semibold text-white">目前計數器數值</h2>
          <p className="text-4xl font-bold text-white">{currentNum}</p>
        </div>
        <Link to="/demo" className="text-3xl font-bold text-gray-600 duration-300 hover:text-white">
          模板總攬
        </Link>
      </div>
    </div>
  )
}

export default HomePage
