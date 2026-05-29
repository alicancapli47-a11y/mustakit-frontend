'use client'
import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

const slides = [
  {
    img: '/images/slide1.jpg',
    badge: '🏗️ Müstakil ev yaptırmanın yeni yolu',
    title: 'Tekele değil,',
    highlight: 'ustana güven.',
    desc: 'Mimardan ustaya, malzemeciden tesisatçıya — tüm inşaat sürecini şeffaf, güvenli ve aracısız yönet.',
  },
  {
    img: '/images/slide2.jpg',
    badge: '🌿 Anadolu\'nun her köşesinde',
    title: 'Arsanız var,',
    highlight: 'hayaliniz de.',
    desc: 'Boş arsan artık yük değil, fırsat. Müstakit ile doğru ustayı bul, projeye başla.',
  },
  {
    img: '/images/slide3.jpg',
    badge: '👷 Güvenilir ustalar',
    title: 'İşini bilen',
    highlight: 'ellere teslim et.',
    desc: 'Tüm ustalar kimlik doğrulamalı, referanslı ve Müstakit güvencesi altında.',
  },
  {
    img: '/images/slide4.jpg',
    badge: '🏠 Hayaller gerçek olur',
    title: 'Evin hazır,',
    highlight: 'ailen mutlu.',
    desc: 'Yüzlerce aile Müstakit ile evlerini yaptırdı. Sıra sende.',
  },
]

export function Hero() {
  const { data: session } = useSession()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full h-[560px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="slideshow-slide"
          style={{
            backgroundImage: `url('${s.img}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.05) 100%)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-8 md:px-16 max-w-6xl mx-auto w-full">
        <div className="text-white max-w-xl">
          <div className="inline-flex items-center gap-2 bg-primary/90 rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            {slide.badge}
          </div>
          <h1 className="font-head text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            {slide.title}<br />
            <span className="text-primary">{slide.highlight}</span>
          </h1>
          <p className="text-white/85 text-base leading-relaxed mb-7 max-w-md">
            {slide.desc}
          </p>
          <div className="flex items-center gap-3">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Projeye Başla
              </Link>
            ) : (
              <button
                onClick={() => signIn('google')}
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Ücretsiz Başla
              </button>
            )}
            <Link
              href="/#nasil-calisir"
              className="text-white/90 border border-white/30 bg-white/10 backdrop-blur-sm font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              Nasıl Çalışır?
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-8 md:left-16 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`slide-dot ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 right-0 left-0 md:left-auto md:right-0 md:w-auto">
        <div className="hidden md:flex items-center gap-8 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-tl-2xl">
          <div className="text-center">
            <div className="font-head font-extrabold text-xl text-primary">1.284</div>
            <div className="text-xs text-muted">Kayıtlı Üye</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-head font-extrabold text-xl text-primary">47</div>
            <div className="text-xs text-muted">Aktif Proje</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-head font-extrabold text-xl text-primary">320+</div>
            <div className="text-xs text-muted">Onaylı Usta</div>
          </div>
        </div>
      </div>
    </section>
  )
}
