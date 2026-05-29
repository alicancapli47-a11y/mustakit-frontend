'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Kendin Yönet',
    sub: 'Platform + eşleştirme',
    price: '500',
    commission: '%2 komisyon',
    featured: false,
    features: [
      'Usta & mimar profilleri',
      'Teklif sistemi',
      'Escrow ödeme güvencesi',
      'AI fiyat tahmini',
      'Belge yükleme',
      'Platform içi mesajlaşma',
    ],
  },
  {
    name: 'Yanında Olalım',
    sub: 'Platform + AI takip + danışmanlık',
    price: '1.500',
    commission: '%3 komisyon',
    featured: true,
    features: [
      'Temel paketteki her şey',
      'AI süreç takibi',
      'Fotoğraf denetimi',
      'Gecikme & anomali uyarısı',
      'Telefon danışmanlığı',
      'Haftalık özet rapor',
    ],
  },
  {
    name: 'Biz Halledelim',
    sub: 'Baştan sona tam yönetim',
    price: '3.000',
    commission: '%5 komisyon',
    featured: false,
    features: [
      'Orta paketteki her şey',
      'Özel proje danışmanı',
      'Usta koordinasyonu',
      'Malzeme takibi',
      'Haftalık ilerleme raporu',
      'Öncelikli destek',
    ],
  },
]

export function Packages() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSelect = () => {
    if (session) {
      router.push('/dashboard')
    } else {
      signIn('google')
    }
  }

  return (
    <section id="paketler" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Paketler</span>
          <h2 className="font-head text-3xl md:text-4xl font-extrabold mt-2 tracking-tight">İhtiyacına göre seç</h2>
          <p className="text-muted text-sm mt-3">İstediğin zaman paketini değiştirebilirsin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                pkg.featured
                  ? 'border-primary bg-primary/5 shadow-card-hover'
                  : 'border-border bg-white shadow-card'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                  En Popüler
                </div>
              )}
              <div>
                <h3 className="font-head font-extrabold text-lg mb-1">{pkg.name}</h3>
                <p className="text-muted text-xs mb-5">{pkg.sub}</p>
                <div className="font-head text-3xl font-extrabold text-primary mb-1">
                  {pkg.price} TL <span className="text-sm font-normal text-muted font-body">/ ay</span>
                </div>
                <div className="text-xs text-success font-semibold mb-6">+ {pkg.commission}</div>
                <ul className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={14} className="text-success mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleSelect}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                  pkg.featured
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'border border-border text-gray-700 hover:bg-surface'
                }`}
              >
                Bu Paketi Seç
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
