'use client'
import { useState } from 'react'

const cities = [
  { label: 'İstanbul', mult: 1.4 },
  { label: 'İzmir', mult: 1.25 },
  { label: 'Ankara', mult: 1.2 },
  { label: 'Antalya', mult: 1.2 },
  { label: 'Bursa', mult: 1.15 },
  { label: 'Kocaeli', mult: 1.1 },
  { label: 'Denizli', mult: 1.0 },
  { label: 'Konya', mult: 1.0 },
  { label: 'Samsun', mult: 1.0 },
  { label: 'Diğer Anadolu', mult: 0.95 },
]

const types = [
  { label: 'Betonarme', minBase: 8000, maxBase: 14000 },
  { label: 'Çelik Konstrüksiyon', minBase: 9000, maxBase: 16000 },
  { label: 'Gazbeton (AAC)', minBase: 7500, maxBase: 13000 },
  { label: 'Prefabrik', minBase: 6000, maxBase: 11000 },
]

const qualities = [
  { label: 'Ekonomik', mult: 0.85 },
  { label: 'Standart', mult: 1.0 },
  { label: 'Lüks', mult: 1.35 },
]

export function MaliyetHesaplayici() {
  const [area, setArea] = useState('')
  const [city, setCity] = useState(cities[6])
  const [type, setType] = useState(types[0])
  const [quality, setQuality] = useState(qualities[1])
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const m2 = Number(area)
    if (!m2 || m2 < 50 || m2 > 1000) return
    const min = Math.round(m2 * type.minBase * city.mult * quality.mult)
    const max = Math.round(m2 * type.maxBase * city.mult * quality.mult)
    const breakdown = {
      proje: Math.round((min + max) / 2 * 0.1),
      kaba: Math.round((min + max) / 2 * 0.43),
      tesisat: Math.round((min + max) / 2 * 0.13),
      ince: Math.round((min + max) / 2 * 0.22),
      dograma: Math.round((min + max) / 2 * 0.09),
      peyzaj: Math.round((min + max) / 2 * 0.04),
    }
    setResult({ min, max, breakdown })
  }

  const fmt = (n: number) => (n / 1000000).toFixed(2) + 'M TL'
  const fmtK = (n: number) => Math.round(n / 1000) + 'K TL'

  return (
    <div id="hesaplayici" className="bg-white border-2 border-primary rounded-2xl overflow-hidden mb-12">
      <div className="bg-primary px-6 py-5">
        <h2 className="font-head font-extrabold text-white text-xl">🧮 Maliyet Hesaplayıcı</h2>
        <p className="text-white/80 text-sm mt-1">2025 güncel piyasa fiyatlarıyla tahmini maliyet hesaplayın</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Yapı Alanı (m²)</label>
            <input
              type="number" value={area} onChange={e => setArea(e.target.value)}
              placeholder="örn: 120" min={50} max={1000}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <div className="text-xs text-muted mt-1">Min: 50 m² · Max: 1000 m²</div>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şehir</label>
            <select value={city.label} onChange={e => setCity(cities.find(c => c.label === e.target.value)!)}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {cities.map(c => <option key={c.label} value={c.label}>{c.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Yapı Tipi</label>
            <select value={type.label} onChange={e => setType(types.find(t => t.label === e.target.value)!)}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {types.map(t => <option key={t.label} value={t.label}>{t.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Malzeme Kalitesi</label>
            <select value={quality.label} onChange={e => setQuality(qualities.find(q => q.label === e.target.value)!)}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
              {qualities.map(q => <option key={q.label} value={q.label}>{q.label}</option>)}
            </select>
          </div>
        </div>

        <button onClick={calculate} disabled={!area || Number(area) < 50}
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6">
          Hesapla
        </button>

        {result && (
          <div className="animate-in fade-in">
            {/* Ana sonuç */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-4 text-center">
              <div className="text-sm text-muted mb-1">{area} m² · {city.label} · {type.label} · {quality.label}</div>
              <div className="font-head font-extrabold text-3xl text-primary mb-1">
                {fmt(result.min)} – {fmt(result.max)}
              </div>
              <div className="text-xs text-muted">Tahmini toplam maliyet · Arsa hariç · KDV hariç</div>
            </div>

            {/* Kalem detayları */}
            <div className="border border-border rounded-xl overflow-hidden mb-4">
              <div className="bg-surface px-4 py-3 text-xs font-bold uppercase tracking-wide text-muted">Maliyet Dağılımı</div>
              {[
                { label: 'Proje, Ruhsat & Etüd', val: result.breakdown.proje },
                { label: 'Kaba İnşaat', val: result.breakdown.kaba },
                { label: 'Elektrik & Tesisat', val: result.breakdown.tesisat },
                { label: 'İnce İşler & Boya', val: result.breakdown.ince },
                { label: 'Doğrama', val: result.breakdown.dograma },
                { label: 'Peyzaj', val: result.breakdown.peyzaj },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 border-t border-border text-sm">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold">~{fmtK(item.val)}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-700 mb-4">
              ⚠️ Bu hesaplama tahmini olup gerçek maliyetler ±20% farklılık gösterebilir.
              Kesin fiyat için platformumuzdaki uzmanlardan teklif alın.
            </div>

            <a href="/giris" className="block w-full text-center bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm">
              Bu Projeyi Müstakit'te Başlat →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
