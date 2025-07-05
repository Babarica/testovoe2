import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Все поля обязательны.' }, { status: 400 })
    }

    console.log('Новое сообщение:', { name, email, message })

    return NextResponse.json({ message: 'Сообщение успешно отправлено!' })
  } catch (error) {
    console.error('Ошибка в API:', error)
    return NextResponse.json({ message: 'Ошибка сервера.' }, { status: 500 })
  }
}
