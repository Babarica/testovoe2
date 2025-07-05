import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная | MySite</title>
        <meta name="description" content="Добро пожаловать на наш сайт. Мы предлагаем лучшие решения для вашего бизнеса." />

        <meta property="og:title" content="Главная | Тестовое задание" />
        <meta property="og:description" content="Узнайте больше о наших продуктах и услугах прямо сейчас." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Главная | Тестовое задание" />
        <meta name="twitter:description" content="Лучшие решения для вашего бизнеса." />
        <meta name="twitter:image" content="https://example.com/og-image.jpg" />

        <link rel="canonical" href="https://example.com/" />
      </Head>

      <main className="scroll-smooth">
        <Header />
        <Hero />
        <Features />
        <ContactForm />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
