'use client'
import { useEffect, useState } from 'react'

type Review = {
  id: number
  name: string
  body: string
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Отзывы наших клиентов</h2>
      {loading ? (
        <p className="text-center text-gray-500">Загрузка отзывов...</p>
      ) : (
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{r.name}</h3>
              <p className="text-gray-700 italic">“{r.body}”</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
