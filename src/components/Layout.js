import { Navigation } from './Navigation'

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        {/* 添加页脚内容 */}
      </footer>
    </div>
  )
}