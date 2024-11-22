import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { aboutData } from '@/lib/data'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function About () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>{aboutData.title}</h1>
        <p className='mb-8 text-lg'>{aboutData.description}</p>
        <h2 className='text-2xl font-semibold mb-4'>Bizning jamoa</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {aboutData.team.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
