import { useAppSelector, useAppDispatch } from '@/hooks/redux'
import { increment, decrement } from '@/store/counter'

const Reduxtest = () => {
  const currentNum = useAppSelector((state) => state.counter.currentNum)
  const dispatch = useAppDispatch()
  const calNumber = (num: number) => {
    if (currentNum === 0 && num === -1) return

    if (num === -1) {
      dispatch(decrement())
    } else {
      dispatch(increment())
    }
  }

  return (
    <div className="flex size-full items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg p-5 shadow-card">
        <p className="text-2xl text-white">{currentNum}</p>
        <div className="flex gap-3 text-xl">
          <div
            className="cursor-pointer select-none rounded-md bg-white px-5 text-black duration-300 hover:brightness-110"
            onClick={() => calNumber(1)}
          >
            增加
          </div>
          <div
            className="cursor-pointer select-none rounded-md bg-gray-700 px-5 text-white duration-300 hover:brightness-95"
            onClick={() => calNumber(-1)}
          >
            減少
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reduxtest
