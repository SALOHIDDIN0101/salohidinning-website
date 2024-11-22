import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { contactData } from '@/lib/data'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Biz bilan bog'laning</h1>
        <Card>
          <CardHeader>
            <CardTitle>Aloqa ma'lumotlari</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><strong>Manzil:</strong> {contactData.address}</p>
            <p className="mb-2"><strong>Telefon:</strong> {contactData.phone}</p>
            <p><strong>Email:</strong> {contactData.email}</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
