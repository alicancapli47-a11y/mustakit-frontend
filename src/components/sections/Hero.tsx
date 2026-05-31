'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const slides = [
  {
    img: '/images/slide1.jpeg',
    badge: '🏗️ Müstakil ev yaptırmanın yeni yolu',
    title: 'Tekele değil,',
    highlight: 'ustana güven.',
    desc: 'Müstakil evinizi yaptırmanın en şeffaf yolu. Mimar, usta ve malzemeciye aracısız ulaşın.'
  },
  {
    img: '/images/slide2.jpeg',
    badge: '🌿 Anadolu\'nun her köşesinde',
    title: 'Arsanız var,',
    highlight: 'hayaliniz de.',
    desc: 'Boş arsan artık yük değil, fırsat. Müstakit ile doğru ustayı bul, projeye başla.',
  },
  {
    img: '/images/slide3.jpeg',
    badge: '👷 Güvenilir ustalar',
    title: 'İşini bilen',
    highlight: 'ellere teslim et.',
    desc: 'Tüm ustalar kimlik doğrulamalı, referanslı ve Müstakit güvencesi altında.',
  },
  {
    img: '/images/slide4.jpeg',
    badge: '🏠 Hayaller gerçek olur',
    title: 'Evin hazır,',
    highlight: 'ailen mutlu.',
    desc: 'Yüzlerce aile Müstakit ile evlerini yaptırdı. Sıra sende.',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '560px' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${s.img}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900" style={{ zIndex: -1 }} />

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)' }}
      />

      <div className="absolute inset-0 flex items-center px-8 md:px-16 max-w-6xl mx-auto w-full left-0 right-0">
        <div className="text-white max-w-xl">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{ background: 'rgba(242,100,25,0.9)' }}
          >
            {slide.badge}
          </div>
          <h1 className="font-head text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            {slide.title}<br />
            <span style={{ color: '#F26419' }}>{slide.highlight}</span>
          </h1>
          <p className="text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,255,255,0.88)' }}>
            {slide.desc}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/giris"
              className="font-semibold px-6 py-3 rounded-lg text-sm text-white"
              style={{ background: '#F26419' }}
            >
              Ücretsiz Başla
            </Link>
            <Link
              href="/#nasil-calisir"
              className="font-medium px-6 py-3 rounded-lg text-sm"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
            >
              Nasıl Çalışır?
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 flex gap-2" style={{ left: '4rem' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 right-0 hidden md:flex">
        <div className="flex items-center gap-8 px-8 py-4 rounded-tl-2xl" style={{ background: 'rgba(255,255,255,0.95)' }}>
          {[
            { val: '1.284', label: 'Kayıtlı Üye' },
            { val: '47', label: 'Aktif Proje' },
            { val: '320+', label: 'Onaylı Usta' },
          ].map((s, i) => (
            <div key={i} className="text-center flex items-center gap-8">
              {i > 0 && <div style={{ width: '1px', height: '32px', background: '#E0D9D0', marginRight: '-24px' }} />}
              <div>
                <div className="font-head font-extrabold text-xl" style={{ color: '#F26419' }}>{s.val}</div>
                <div className="text-xs" style={{ color: '#777' }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
