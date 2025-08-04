import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages'
import AboutPage from '@/pages/About'
import ContactPage from '@/pages/Contact'
import Demo from '@/pages/demo'
import Todolist from '@/components/Demo/Todolist'
import Reduxtest from '@/components/Demo/Reduxtest'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/todolist" element={<Todolist />} />
          <Route path="/demo/reduxtest" element={<Reduxtest />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
