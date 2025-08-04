import { useEffect, useState } from 'react';
import List from '../Home/List';
import Edit from '../Home/Edit';

interface Note {
  id: number;
  text: string;
  date: string;
  time: string;
}

const Todolist = () => {
  const [formData, setFormData] = useState<Note>({
    id: Date.now(),
    text: '',
    date: '',
    time: '',
  });
  const [todos, setTodos] = useState<Note[]>([]);

  const getData = async () => {
    try {
      if (localStorage.getItem('todos')) {
        const localTodos = localStorage.getItem('todos');
        if (localTodos) {
          setTodos(JSON.parse(localTodos));
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateData = (key: keyof Note, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const addTodos = async () => {
    if (!formData.text.trim()) return;

    const newTodo: Note = {
      id: Date.now(),
      text: formData.text,
      date: formData.date,
      time: formData.time,
    };

    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));

    setTodos([...todos, newTodo]);
    setFormData({
      id: Date.now(),
      text: '',
      date: '',
      time: '',
    });
  };

  const deleteTodos = async (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 font-Noto flex flex-col md:flex-row justify-center gap-10">
      <div className="w-full mx-auto lg:w-1/2 max-w-md">
        <Edit addTodos={addTodos} formData={formData} updateData={updateData} />
      </div>
      <div className="w-full mx-auto lg:w-1/2 max-w-md">
        <List todos={todos} deleteTodos={deleteTodos} />
      </div>
    </div>
  );
};

export default Todolist;
