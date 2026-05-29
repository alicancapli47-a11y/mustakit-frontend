import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const categories = ['Tümü', 'Yapı Malzemesi', 'Ahşap', 'Doğrama', 'Demir & Çimento', 'Yalıtım', 'Boya & Sıva']

const products = [
  { emoji: '🧱', cat: 'Yapı Malzemesi', name: 'Tuğla 8\'lik (1000 adet)', price: 4200, unit: 'palet', seller: 'Kaya Tuğla · Eskişehir' },
  { emoji: '🪵', cat: 'Ahşap', name: 'Çatı Mertekleri 8x8cm', price: 185, unit: 'mt', seller: 'Orman Ahşap · Bolu' },
  { emoji: '🪟', cat: 'Doğrama', name: 'PVC Pencere 120x120cm', price: 3800, unit: 'adet', seller: 'Elit Doğrama · Ankara' },
  { emoji: '🏗️', cat: 'Demir & Çimento', name: 'İnşaat Demiri Φ12', price: 320, unit: 'kg', seller: 'Demir A.Ş. · İzmir' },
  { emoji: '🧴', cat: 'Yalıtım', name: 'Taşyünü 5cm (1m²)', price: 280, unit: 'm²', seller: 'İzotek · Kocaeli' },
  { emoji: '🎨', cat: 'Boya & Sıva', name: 'Dış Cephe Boyası 15lt', price: 1850, unit: 'kova', seller: 'Renk Boya · Bursa' },
  { emoji: '🧱', cat: 'Yapı Malzemesi', name: 'Briket 19x19x38cm', price: 18, unit: 'adet', seller: 'Yapı Blok · Konya' },
  { emoji: '🪵', cat: 'Ahşap', name: 'Lam Parke 12mm', price: 420, unit: 'm²', seller: 'Parke Market · İstanbul' },
]

export default function DukkanPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Malzeme Dükkanı</span>
            <h1 className="font-head text-3xl font-extrabold mt-2 mb-3">Doğrudan üreticiden al</h1>
            <p className="text-muted text-sm">Aracı yok, şeffaf fiyat, güvenli ödeme.</p>
          </div>

          {/* Kategoriler */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  i === 0
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-border text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Ürünler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <div key={i} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="h-28 bg-surface2 flex items-center justify-center text-5xl border-b border-border">
                  {p.emoji}
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{p.cat}</div>
                  <div className="font-semibold text-sm mb-1 leading-snug">{p.name}</div>
                  <div className="text-xs text-muted mb-3">{p.seller}</div>
                  <div className="flex items-center justify-between">
                    <div className="font-head font-extrabold text-base">
                      {p.price.toLocaleString('tr-TR')} TL
                      <span className="text-xs text-muted font-normal font-body"> / {p.unit}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-1.5 rounded-lg text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                    Sipariş Ver
                  </button>
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
