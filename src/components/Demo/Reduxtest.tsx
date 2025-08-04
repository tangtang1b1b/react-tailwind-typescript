import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { increment, decrement } from '@/store/counter';

const Reduxtest = () => {
  const currentNum = useAppSelector((state) => state.counter.currentNum);
  const dispatch = useAppDispatch();
  const calNumber = (num: number) => {
    if (currentNum === 0 && num === -1) return;

    if (num === -1) {
      dispatch(decrement());
    } else {
      dispatch(increment());
    }
  };

  return (
    <div className="size-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-lg shadow-card">
        <p className="text-2xl">{currentNum}</p>
        <div className="flex gap-3 text-2xl">
          <div className="rounded-lg select-none px-2 bg-blue-500 text-white cursor-pointer duration-300 hover:brightness-110" onClick={() => calNumber(1)}>
            增加
          </div>
          <div className="rounded-lg select-none px-2 bg-red-500 text-white cursor-pointer duration-300 hover:brightness-95" onClick={() => calNumber(-1)}>
            減少
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reduxtest;
