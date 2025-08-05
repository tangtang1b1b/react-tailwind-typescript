import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface ListProps {
  id: string
  name: string
  path: string
}

interface CategoryProps {
  id: string
  name: string
}

const Demo = () => {
  const list: ListProps[] = [
    { id: '1', name: 'Todolist', path: '/demo/todolist' },
    { id: '2', name: 'Reduxtest', path: '/demo/reduxtest' },
    { id: '1', name: 'Buylist', path: '/demo/buylist' },
  ]

  const category: CategoryProps[] = [
    {
      id: '0',
      name: '全部',
    },
    {
      id: '1',
      name: '功能',
    },
    {
      id: '2',
      name: '元件',
    },
  ]

  const [activeList, setActiveList] = useState<ListProps[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('0')

  useEffect(() => {
    const filteredList = list.filter((item) => {
      if (activeCategory === '0') return true
      return item.id === activeCategory
    })
    setActiveList(filteredList)
  }, [activeCategory])

  return (
    <div className="mx-auto h-full max-w-screen-lg bg-black">
      <div className="flex justify-center gap-3 pt-5">
        {category.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveCategory(item.id)}
            className={`mb-4 cursor-pointer text-xl font-bold duration-300 hover:text-white ${
              activeCategory === item.id ? 'text-white' : 'text-gray-600'
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="grid gap-5 px-4 py-8 font-Noto sm:grid-cols-2 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {activeList.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex aspect-video items-center justify-center rounded-lg border-[2px] border-gray-600 text-xl text-gray-600 duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Demo
