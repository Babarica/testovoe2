'use client'

import { CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'Простой старт',
    description: 'Запусти лендинг за считанные минуты без лишней настройки.',
  },
  {
    title: 'Адаптивный дизайн',
    description: 'Отлично выглядит на любом устройстве: от смартфона до большого монитора.',
  },
  {
    title: 'Легко кастомизировать',
    description: 'Структура кода понятна и готова к расширению под любые нужды.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition text-left"
            >
              <CheckCircle className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
