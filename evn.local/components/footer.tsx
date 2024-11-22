import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Salohidinning</h3>
            <p className="text-gray-400">Sizning muvaffaqiyatingiz - bizning maqsadimiz</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Tezkor havolalar</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Bosh sahifa</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Xizmatlar</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Biz haqimizda</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Aloqa</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Biz bilan bog'laning</h4>
            <p className="text-gray-400">Email: info@salohidinning.uz</p>
            <p className="text-gray-400">Tel: +998 90 123 45 67</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Salohidinning. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

