'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-blue-100 to-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Продвигай свой продукт <br /> с нашим современным лендингом
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mb-8">
        Мы поможем тебе быстро и просто представить свой SaaS, сервис или идею в лучшем свете.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Связаться с нами
      </a>
    </section>
  )
}
