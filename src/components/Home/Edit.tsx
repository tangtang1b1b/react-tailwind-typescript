interface Note {
  text: string
  date: string
  time: string
}

interface EditProps {
  addTodos: () => void
  formData: Note
  updateData: (key: keyof Note, value: string) => void
}

const Edit: React.FC<EditProps> = ({ addTodos, formData, updateData }) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 space-y-4 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="text-center font-Noto text-2xl font-semibold">便條</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            事項 :
          </label>
          <input
            type="text"
            id="note"
            value={formData.text}
            onChange={(e) => updateData('text', e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="輸入文字..."
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            日期 :
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => updateData('date', e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="輸入文字..."
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-gray-700">
            時間 :
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={(e) => updateData('time', e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="輸入文字..."
          />
        </div>
      </div>
      <button onClick={addTodos} className="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700">
        新增
      </button>
    </div>
  )
}

export default Edit
