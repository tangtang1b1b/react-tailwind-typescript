import { Link } from 'react-router-dom'

interface ListProps {
  name: string
  path: string
}

const Demo = () => {
  const list: ListProps[] = [
    { name: 'Todolist', path: '/demo/todolist' },
    { name: 'Reduxtest', path: '/demo/reduxtest' },
  ]

  return (
    <div className="mx-auto grid max-w-screen-lg gap-10 px-4 py-8 font-Noto sm:grid-cols-2 md:grid-cols-3">
      {list.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex aspect-video items-center justify-center rounded-lg border-[2px] border-blue-500 text-xl text-blue-500 duration-300 hover:bg-blue-500 hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Demo
