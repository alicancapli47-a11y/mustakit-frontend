import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const professionals = [
  { emoji: '👷', name: 'Mehmet Yılmaz', type: 'Temel Ustası', stars: 5, jobs: 47, city: 'Denizli', price: '800-1200 TL/gün' },
  { emoji: '📐', name: 'Ayşe Kara', type: 'Mimar', stars: 4, jobs: 28, city: 'İzmir', price: '15.000-30.000 TL/proje' },
  { emoji: '⚡', name: 'Ali Demir', type: 'Elektrikçi', stars: 5, jobs: 63, city: 'Bursa', price: '600-900 TL/gün' },
  { emoji: '🔧', name: 'Hasan Çelik', type: 'Tesisatçı', stars: 5, jobs: 39, city: 'Ankara', price: '700-1000 TL/gün' },
  { emoji: '🧱', name: 'Kadir Arslan', type: 'Duvar Ustası', stars: 4, jobs: 52, city: 'Konya', price: '700-1000 TL/gün' },
  { emoji: '🏠', name: 'Fatma Şahin', type: 'İç Mimar', stars: 5, jobs: 31, city: 'İstanbul', price: '20.000-50.000 TL/proje' },
  { emoji: '🪚', name: 'İbrahim Yıldız', type: 'Çatı Ustası', stars: 4, jobs: 44, city: 'Samsun', price: '800-1200 TL/gün' },
  { emoji: '🎨', name: 'Zeynep Aktaş', type: 'Sıva & Boya Ustası', stars: 5, jobs: 58, city: 'Mersin', price: '500-800 TL/gün' },
]

const types = ['Tümü', 'Mimar', 'Temel Ustası', 'Duvar Ustası', 'Çatı Ustası', 'Elektrikçi', 'Tesisatçı', 'İç Mimar']

export default function UzmanlarPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Uzmanlar</span>
            <h1 className="font-head text-3xl font-extrabold mt-2 mb-3">Onaylı profesyoneller</h1>
            <p className="text-muted text-sm">Tüm uzmanlar kimlik doğrulamalı ve referanslıdır.</p>
          </div>

          {/* Filtreler */}
          <div className="flex gap-2 flex-wrap mb-8">
            {types.map((t, i) => (
              <button
                key={i}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  i === 0
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-border text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {professionals.map((p, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5 hover:border-primary hover:shadow-card-hover transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-surface2 flex items-center justify-center text-2xl mb-3">
                  {p.emoji}
                </div>
                <div className="font-semibold text-sm mb-0.5">{p.name}</div>
                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{p.type}</div>
                <div className="text-primary text-xs mb-1">{'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}</div>
                <div className="text-xs text-muted mb-1">{p.jobs} proje · {p.city}</div>
                <div className="text-xs text-gray-600 mb-3">{p.price}</div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded px-2 py-0.5 text-xs text-green-700 font-semibold">
                    ✓ Onaylı
                  </div>
                  <button className="text-xs text-primary font-semibold hover:underline">Teklif Al →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
