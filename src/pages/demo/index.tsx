import { Link } from 'react-router-dom';

interface ListProps {
  name: string;
  path: string;
}

const Demo = () => {
  const list: ListProps[] = [
    { name: 'Todolist', path: '/demo/todolist' },
    { name: 'Reduxtest', path: '/demo/reduxtest' },
  ];

  return (
    <div className="mx-auto max-w-screen-lg grid grid-cols-3 px-4 py-8 font-Noto gap-10">
      {list.map((item) => (
        <Link key={item.name} to={item.path} className="text-blue-500 aspect-video text-xl flex items-center border-[2px] border-blue-500 rounded-lg justify-center hover:bg-blue-500 hover:text-white duration-300">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Demo;
