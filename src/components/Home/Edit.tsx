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
    <div className="mx-auto flex w-full flex-col gap-5 space-y-4 rounded-lg bg-black p-8 shadow-card">
      <h2 className="text-center font-Noto text-2xl font-semibold text-white">便條</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-white">
            事項 :
          </label>
          <input
            type="text"
            id="note"
            value={formData.text}
            onChange={(e) => updateData('text', e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-gray-600 placeholder:text-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-white"
            placeholder="輸入文字..."
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-white">
            日期 :
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onClick={(e) => e.currentTarget.showPicker?.()}
            onChange={(e) => updateData('date', e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="note" className="text-md text-white">
            時間 :
          </label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onClick={(e) => e.currentTarget.showPicker?.()}
            onChange={(e) => updateData('time', e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-black px-3 py-2 text-gray-600 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-white"
          />
        </div>
      </div>
      <button onClick={addTodos} className="mb-4 rounded bg-white px-4 py-2 font-bold text-black transition-colors hover:bg-white/90">
        新增
      </button>
    </div>
  )
}

export default Edit
