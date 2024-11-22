import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Salohidinning - Sizning muvaffaqiyatingiz kaliti</h1>
        <p className="text-xl mb-8">Biz bilan birga o'sib boring va yangi cho'qqilarni zabt eting</p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/xizmatlar">Batafsil ma'lumot</Link>
        </Button>
      </div>
    </section>
  )
}