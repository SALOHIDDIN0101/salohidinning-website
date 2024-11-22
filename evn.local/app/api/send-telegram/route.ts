import { NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = '@s_sulaymonov'

export async function POST (request: Request) {
  const { phone, email } = await request.json()

  const message = `💫 Yangi foydalanuvchi ma'lumotlari:\n\n📱 Telefon: ${phone}\n📧 Email: ${email}\n\nSalohidinning veb-saytidan yuborildi`

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      }
    )

    if (!response.ok) {
      throw new Error('Telegram API xatolik qaytardi')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Xabar yuborishda xatolik:', error)
    return NextResponse.json(
      { success: false, error: 'Xabar yuborishda xatolik yuz berdi' },
      { status: 500 }
    )
  }
}
