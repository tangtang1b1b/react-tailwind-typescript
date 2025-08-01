interface Note {
  text: string;
  date: string;
  time: string;
}

interface EditProps {
  addTodos: () => void;
  formData: Note;
  updateData: (key: keyof Note, value: string) => void;
}

const Edit: React.FC<EditProps> = ({ addTodos, formData, updateData }) => {
  return (
    <div className="bg-white p-8 rounded-lg space-y-4 shadow-lg w-full mx-auto flex flex-col gap-5">
      <h2 className="text-2xl font-semibold font-Noto text-center">便條</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            事項 :
          </label>
          <input type="text" id="note" value={formData.text} onChange={(e) => updateData('text', e.target.value)} className="border border-gray-400 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="輸入文字..." />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            日期 :
          </label>
          <input type="date" id="date" value={formData.date} onChange={(e) => updateData('date', e.target.value)} className="border border-gray-400 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="輸入文字..." />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            時間 :
          </label>
          <input type="time" id="time" value={formData.time} onChange={(e) => updateData('time', e.target.value)} className="border border-gray-400 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="輸入文字..." />
        </div>
      </div>
      <button onClick={addTodos} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors mb-4">
        新增
      </button>
    </div>
  );
};

export default Edit;
