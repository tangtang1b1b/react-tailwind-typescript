interface Note {
  id: number;
  text: string;
  date: string;
  time: string;
}

interface ListProps {
  todos: Note[];
  deleteTodos: (id: number) => void;
}

const List: React.FC<ListProps> = ({ todos, deleteTodos }) => {
  return (
    <div className="bg-white rounded-lg space-y-4 w-full shadow-lg mx-auto flex flex-col gap-5">
      <h2 className="text-2xl pt-8 font-semibold font-Noto text-center">項目表</h2>
      <ul className="flex px-8 flex-col gap-4 max-h-[50vh] overflow-y-auto">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b border-gray-400 pb-4 flex justify-between items-center gap-5">
            <ul className="list-none w-full">
              <li className="text-gray-700 font-bold break-all line-clamp-1">{todo.text}</li>
              <li className="flex flex-wrap gap-2">
                <div className="text-gray-700">{todo.date}</div>
                <div className="text-gray-700">{todo.time}</div>
              </li>
            </ul>
            <button onClick={() => deleteTodos(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white shrink-0 font-bold py-2 px-4 rounded transition-colors mb-4">
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
