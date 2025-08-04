import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 bg-gray-50">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
