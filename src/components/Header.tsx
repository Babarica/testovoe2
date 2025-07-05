'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-neutral-800 bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Тестовое задание</div>
        <nav className="space-x-4">
          <a href="#hero" className="hover:text-blue-600">Главная</a>
          <a href="#features" className="hover:text-blue-600">Фичи</a>
          <a href="#testimonials" className="hover:text-blue-600">Отзывы</a>
          <a href="#contact" className="hover:text-blue-600">Контакты</a>
        </nav>
      </div>
    </header>
  )
}