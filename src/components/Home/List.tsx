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
    <div className="bg-white p-8 rounded-lg space-y-4 w-full shadow-lg mx-auto flex flex-col gap-5">
      <h2 className="text-2xl font-semibold font-Noto text-center">項目表</h2>
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b border-gray-400 pb-4 flex justify-between items-center">
            <ul className="list-none">
              <li className="text-gray-700 font-bold">{todo.text}</li>
              <li className="flex gap-2">
                <div className="text-gray-700">{todo.date}</div>
                <div className="text-gray-700">{todo.time}</div>
              </li>
            </ul>
            <button onClick={() => deleteTodos(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors mb-4">
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
