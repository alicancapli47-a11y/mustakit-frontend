import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Packages } from '@/components/sections/Packages'
import { Professionals } from '@/components/sections/Professionals'
import { Shop } from '@/components/sections/Shop'
import { Footer } from '@/components/layout/Footer'

function StudioBanner() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              🎬 Yeni Hizmet
            </div>
            <h2 className="font-head text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
              Arsanız için profesyonel<br />
              <span className="text-primary">tanıtım videosu</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Emlakçılar ve arsa sahipleri için. Arsa bilgilerini doldurun, fotoğrafları yükleyin.
              1-2 iş günü içinde profesyonel video hazır.
            </p>
            <div className="flex items-center gap-6 mt-5 text-sm">
              <div className="text-white">
                <span className="font-head font-extrabold text-xl text-primary">2.500 TL</span>
                <span className="text-gray-500 ml-2">sabit fiyat</span>
              </div>
              <div className="w-px h-5 bg-gray-700" />
              <div className="text-gray-400">%50 peşin · %50 teslimde</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <a
              href="https://studio.mustakit.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-head font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors text-base whitespace-nowrap"
            >
              🎬 Müstakit Studio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <span className="text-gray-600 text-xs">studio.mustakit.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <StudioBanner />
      <Packages />
      <Professionals />
      <Shop />
      <Footer />
    </main>
  )
}
