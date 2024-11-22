'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'

export function LoginModal() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, email }),
      })
      if (response.ok) {
        toast({
          title: "Muvaffaqiyatli yuborildi",
          description: "Sizning ma'lumotlaringiz qabul qilindi.",
        })
        setIsOpen(false)
        setPhone('')
        setEmail('')
      } else {
        throw new Error('Xatolik yuz berdi')
      }
    } catch (error) {
      toast({
        title: "Xatolik",
        description: "Ma'lumotlarni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Kirish</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Kirish</DialogTitle>
          <DialogDescription>
            Iltimos, telefon raqamingiz va email manzilingizni kiriting.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phone">Telefon raqam</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email manzil</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">Yuborish</Button>
        </form>
      </DialogContent>
    </Dialog>
  