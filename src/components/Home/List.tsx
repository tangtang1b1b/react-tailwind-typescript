interface Note {
  id: number
  text: string
  date: string
  time: string
}

interface ListProps {
  todos: Note[]
  deleteTodos: (id: number) => void
}

const List: React.FC<ListProps> = ({ todos, deleteTodos }) => {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 space-y-4 rounded-lg bg-black shadow-card">
      <h2 className="pt-8 text-center font-Noto text-2xl font-semibold">項目表</h2>
      <ul className="flex max-h-[50vh] flex-col gap-4 overflow-y-auto px-8">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between gap-5 pb-4 ${index !== todos.length - 1 ? 'border-b border-gray-400' : ''}`}
          >
            <ul className="w-full list-none">
              <li className="line-clamp-1 break-all font-bold text-white">{todo.text}</li>
              <li className="flex flex-wrap gap-2">
                <div className="text-white">{todo.date}</div>
                <div className="text-white">{todo.time}</div>
              </li>
            </ul>
            <button
              onClick={() => deleteTodos(todo.id)}
              className="mb-4 shrink-0 rounded bg-white px-4 py-2 font-bold text-black transition-colors hover:bg-white/90"
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
