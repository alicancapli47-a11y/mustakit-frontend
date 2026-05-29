const items = [
  { emoji: '🧱', cat: 'Yapı Malzemesi', name: 'Tuğla 8\'lik (1000 adet)', price: '4.200 TL', unit: 'palet' },
  { emoji: '🪵', cat: 'Ahşap', name: 'Çatı Mertekleri 8x8cm', price: '185 TL', unit: 'mt' },
  { emoji: '🪟', cat: 'Doğrama', name: 'PVC Pencere 120x120cm', price: '3.800 TL', unit: 'adet' },
  { emoji: '🏗️', cat: 'Demir & Çimento', name: 'İnşaat Demiri Φ12', price: '320 TL', unit: 'kg' },
]

export function Shop() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Malzeme Dükkanı</span>
            <h2 className="font-head text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">Doğrudan üreticiden al</h2>
            <p className="text-muted text-sm mt-2">Aracı yok, şeffaf fiyat, güvenli ödeme.</p>
          </div>
          <a href="/dukkan" className="text-sm font-medium text-primary hover:underline hidden md:block">
            Tümünü gör →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow">
              <div className="h-28 bg-surface2 flex items-center justify-center text-5xl border-b border-border">
                {item.emoji}
              </div>
              <div className="p-4">
                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{item.cat}</div>
                <div className="font-semibold text-sm mb-3 leading-snug">{item.name}</div>
                <div className="font-head font-extrabold text-lg">
                  {item.price} <span className="text-xs text-muted font-normal font-body">/ {item.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
