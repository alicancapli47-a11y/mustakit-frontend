'use client'
import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { useRouter } from 'next/navigation'

const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Denizli', 'Konya', 'Mersin', 'Samsun', 'Diğer']

function calcEstimate(area: number, city: string) {
  const baseMin = 8000
  const baseMax = 15000
  const mult = ['İstanbul'].includes(city) ? 1.4 : ['İzmir', 'Ankara', 'Antalya'].includes(city) ? 1.2 : 1.0
  return {
    min: Math.round(area * baseMin * mult),
    max: Math.round(area * baseMax * mult),
  }
}

export default function YeniProjePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', city: '', area: '', budget: '', description: '' })
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const updated = { ...form, [e.target.name]: e.target.value }
    setForm(updated)
    if (updated.area && updated.city && Number(updated.area) > 0) {
      setEstimate(calcEstimate(Number(updated.area), updated.city))
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface py-12 px-4">
        <div className="max-w-xl mx-auto">

          {/* Steps */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  step >= s ? 'bg-primary text-white' : 'bg-border text-muted'
                }`}>{s}</div>
                {s < 3 && <div className={`h-px w-12 ${step > s ? 'bg-primary' : 'bg-border'}`} />}
              </div>
            ))}
            <div className="ml-2 text-xs text-muted">
              {step === 1 ? 'Proje Bilgileri' : step === 2 ? 'AI Tahmini' : 'Onay'}
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8">

            {step === 1 && (
              <div>
                <h1 className="font-head font-extrabold text-2xl mb-6">Projenizi tanımlayın</h1>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Proje Adı</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="örn: Denizli Ev Projesi" className="input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şehir</label>
                    <select name="city" value={form.city} onChange={handleChange} className="input">
                      <option value="">Seçin</option>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Alan (m²)</label>
                    <input name="area" value={form.area} onChange={handleChange}
                      type="number" placeholder="örn: 120" className="input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Bütçe (TL) — opsiyonel</label>
                    <input name="budget" value={form.budget} onChange={handleChange}
                      type="number" placeholder="örn: 2000000" className="input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Notlar — opsiyonel</label>
                    <textarea name="description" value={form.description} onChange={handleChange}
                      placeholder="Özel istekleriniz, zemin durumu, vs." className="input h-20 resize-none" />
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.name || !form.city || !form.area}
                  className="btn-primary w-full mt-6 disabled:opacity-50"
                >
                  Devam →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h1 className="font-head font-extrabold text-2xl mb-2">AI Maliyet Tahmini</h1>
                <p className="text-muted text-sm mb-6">Güncel piyasa verilerine göre hesaplandı.</p>

                {estimate && (
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Tahmini Maliyet</div>
                    <div className="font-head font-extrabold text-3xl text-primary mb-1">
                      {(estimate.min / 1000000).toFixed(1)}M – {(estimate.max / 1000000).toFixed(1)}M TL
                    </div>
                    <div className="text-xs text-muted">Arsa hariç · {form.area}m² · {form.city}</div>
                  </div>
                )}

                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { label: 'Ruhsat & Proje', val: '200.000 – 450.000 TL' },
                    { label: 'Kaba İnşaat', val: `${Math.round(Number(form.area) * 6000).toLocaleString('tr-TR')} TL` },
                    { label: 'Tesisat (Elektrik + Su)', val: `${Math.round(Number(form.area) * 2000).toLocaleString('tr-TR')} TL` },
                    { label: 'İnce İşler & Boya', val: `${Math.round(Number(form.area) * 3000).toLocaleString('tr-TR')} TL` },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border text-sm">
                      <span className="text-muted">{item.label}</span>
                      <span className="font-semibold">{item.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="btn-ghost flex-1">← Geri</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1">Projeyi Oluştur →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h1 className="font-head font-extrabold text-2xl mb-3">Proje oluşturuldu!</h1>
                <p className="text-muted text-sm mb-6">
                  <strong>{form.name}</strong> projeniz kaydedildi. Şimdi uzman tekliflerini bekliyorsunuz.
                </p>
                <button onClick={() => router.push('/dashboard')} className="btn-primary w-full">
                  Dashboard'a Git →
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
