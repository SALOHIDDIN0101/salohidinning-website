import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, TrendingUp } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Ta'lim",
      description: "Sifatli va zamonaviy ta'lim xizmatlari",
      icon: BookOpen
    },
    {
      title: "Jamoa",
      description: "Malakali va tajribali mutaxassislar jamoasi",
      icon: Users
    },
    {
      title: "Rivojlanish",
      description: "Doimiy rivojlanish va yangilanish",
      icon: TrendingUp
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Bizning afzalliklarimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

