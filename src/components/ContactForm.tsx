'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError('Пожалуйста, заполните все поля.')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setError(null)
      } else {
        const data = await res.json()
        setError(data.message || 'Ошибка при отправке формы.')
      }
    } catch (err) {
      setError('Ошибка соединения.')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-blue-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Связаться с нами</h2>
        <p className="text-gray-600 mb-8">Оставьте сообщение, и мы ответим в ближайшее время.</p>

        {submitted ? (
          <p className="text-green-600 font-semibold">Спасибо! Ваше сообщение отправлено.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
             <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="w-full px-4 py-2 border rounded placeholder-gray-400 focus:outline-none focus:ring-0"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded placeholder-gray-400 focus:outline-none focus:ring-0"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Ваше сообщение"
                className="w-full px-4 py-2 border rounded placeholder-gray-400 focus:outline-none focus:ring-0"
                rows={5}
                value={formData.message}
                onChange={handleChange}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
