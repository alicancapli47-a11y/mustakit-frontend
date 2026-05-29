const steps = [
  {
    num: '01',
    icon: '📋',
    title: 'Projeyi Tanımla',
    desc: 'Arsa bilgilerini, bütçeni ve beklentilerini gir. AI sana gerçekçi maliyet tahmini çıkarsın.',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'Uzmanları Seç',
    desc: 'Mimarı ayrı seç, ustayı ayrı seç, malzemecisini ayrı seç. Tekel yok, şeffaf fiyat.',
  },
  {
    num: '03',
    icon: '🔒',
    title: 'Güvenli Öde',
    desc: 'Paranın %50\'si escrow\'da bekler. Her aşama tamamlanınca onaylarsın, ödeme serbest kalır.',
  },
  {
    num: '04',
    icon: '🏠',
    title: 'Evin Teslim',
    desc: 'AI süreç takibi yapar, fotoğraf denetimi uygular, gecikmeleri sana bildirir.',
  },
]

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Nasıl Çalışır</span>
          <h2 className="font-head text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">4 adımda evin hazır</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-6 relative">
              <div className="font-head text-5xl font-extrabold text-border leading-none mb-4">{step.num}</div>
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-head font-bold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
