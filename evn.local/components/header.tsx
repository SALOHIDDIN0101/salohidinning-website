import Link from 'next/link'
import { LoginModal } from './login-modal'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Salohidinning
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-gray-600 hover:text-primary">Bosh sahifa</Link></li>
            <li><Link href="/xizmatlar" className="text-gray-600 hover:text-primary">Xizmatlar</Link></li>
            <li><Link href="/biz-haqimizda" className="text-gray-600 hover:text-primary">Biz haqimizda</Link></li>
            <li><Link href="/aloqa" className="text-gray-600 hover:text-primary">Aloqa</Link></li>
          </ul>
        </nav>
        <LoginModal />
      </div>
    </header>
  )
}

