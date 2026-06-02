'use client'
import Link from 'next/link'
import { Check } from 'lucide-react'

const features = [
  'Onaylı mimar ve usta profilleri',
  'Teklif sistemi — birden fazla teklif al',
  'Escrow güvenli ödeme sistemi',
  'AI maliyet tahmini ve süreç takibi',
  'Fotoğraf denetimi ve aşama onayı',
  'Belge yükleme ve arşivleme',
  'Platform içi mesajlaşma',
  'Gecikme ve anomali uyarıları',
]

export function Packages() {
  return (
    <section id="paketler" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Nasıl Çalışır</span>
          <h2 className="font-head text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">
            Üyelik ücretsiz
          </h2>
          <p className="text-muted text-sm mt-3 max-w-lg mx-auto">
            Müstakit'e kayıt olmak ve uzman bulmak tamamen ücretsiz. 
            Sadece usta ile anlaşıp ilk aşamayı başlattığınızda küçük bir platform ücreti alınır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Sol - özellikler */}
          <div>
            <div className="text-sm font-semibold text-gray-700 mb-4">Platforma dahil olan her şey:</div>
            <ul className="flex flex-col gap-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ - fiyat kartı */}
          <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 text-center">
            <div className="font-head font-extrabold text-5xl text-primary mb-2">Ücretsiz</div>
            <div className="text-muted text-sm mb-6">Kayıt ve uzman arama</div>

            <div className="border-t border-primary/20 pt-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wide text-muted mb-3">Sadece iş başladığında</div>
              <div className="font-head font-extrabold text-3xl text-primary mb-1">500 TL</div>
              <div className="text-muted text-xs">İlk aşama başlatma ücreti · Tek seferlik</div>
            </div>

            <Link href="/giris" className="block w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">
              Hemen Başla — Ücretsiz
            </Link>
            <p className="text-xs text-muted mt-3">Kredi kartı gerekmez</p>
          </div>
        </div>
      </div>
    </section>
  )
}
