const professionals = [
  { emoji: '👷', name: 'Mehmet Yılmaz', type: 'Temel Ustası', stars: 5, jobs: 47, city: 'Denizli' },
  { emoji: '📐', name: 'Ayşe Kara', type: 'Mimar', stars: 4, jobs: 28, city: 'İzmir' },
  { emoji: '⚡', name: 'Ali Demir', type: 'Elektrikçi', stars: 5, jobs: 63, city: 'Bursa' },
  { emoji: '🔧', name: 'Hasan Çelik', type: 'Tesisatçı', stars: 5, jobs: 39, city: 'Ankara' },
]

export function Professionals() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Uzmanlar</span>
            <h2 className="font-head text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">Onaylı profesyoneller</h2>
          </div>
          <a href="/uzmanlar" className="text-sm font-medium text-primary hover:underline hidden md:block">
            Tümünü gör →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {professionals.map((p, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-5 hover:border-primary hover:shadow-card-hover transition-all cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-surface2 flex items-center justify-center text-2xl mb-3">
                {p.emoji}
              </div>
              <div className="font-semibold text-sm mb-0.5">{p.name}</div>
              <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{p.type}</div>
              <div className="text-primary text-xs mb-1">{'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}</div>
              <div className="text-xs text-muted mb-3">{p.jobs} proje · {p.city}</div>
              <div className="inline-flex items-center gap-1 bg-success/10 border border-success/20 rounded px-2 py-0.5 text-xs text-success font-semibold">
                ✓ Onaylı
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
