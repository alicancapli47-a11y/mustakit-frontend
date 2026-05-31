'use client'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { useRouter } from 'next/navigation'
import { Upload, MapPin, Home, FileText, Camera, CheckCircle } from 'lucide-react'

const cities = ['Adana','Ankara','Antalya','Aydın','Balıkesir','Bursa','Denizli','Diyarbakır','Eskişehir','İstanbul','İzmir','Kocaeli','Konya','Mersin','Muğla','Sakarya','Samsun','Trabzon','Diğer']

function calcEstimate(area: number, city: string) {
  const mult = ['İstanbul'].includes(city) ? 1.4 : ['İzmir','Ankara','Antalya','Bursa'].includes(city) ? 1.2 : 1.0
  return { min: Math.round(area * 8000 * mult), max: Math.round(area * 15000 * mult) }
}

export default function YeniProjePage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', city: '', district: '', area: '', floors: '1', buildType: 'betonarme', budget: '', description: '' })
  const [files, setFiles] = useState<{ tapu: File|null, ruhsat: File|null, etud: File|null }>({ tapu: null, ruhsat: null, etud: null })
  const [photos, setPhotos] = useState<File[]>([])
  const [stages, setStages] = useState({ proje: true, insaat: true, malzeme: true })
  const [estimate, setEstimate] = useState<any>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (!u) { window.location.href = '/giris'; return }
    setUser(JSON.parse(u))
  }, [])

  useEffect(() => {
    if (form.area && form.city && Number(form.area) > 0) setEstimate(calcEstimate(Number(form.area), form.city))
  }, [form.area, form.city])

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ ...form, userId: user?.id, area: Number(form.area), budget: form.budget ? Number(form.budget) : undefined }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Proje oluşturulamadı'); return }
      setStep(5)
    } catch { setError('Sunucuya bağlanılamadı') }
    finally { setLoading(false) }
  }

  const stepTitles = ['Arsa Bilgileri', 'Belgeler', 'Fotoğraflar', 'Hizmet Seçimi', 'Tamamlandı']

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface py-10 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-1 mb-8">
            {stepTitles.map((t, i) => (
              <div key={i} className="flex items-center gap-1 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step > i+1 ? 'bg-green-500 text-white' : step === i+1 ? 'bg-primary text-white' : 'bg-border text-muted'}`}>
                  {step > i+1 ? '✓' : i+1}
                </div>
                {i < 4 && <div className={`h-px flex-1 ${step > i+1 ? 'bg-green-500' : 'bg-border'}`} />}
              </div>
            ))}
          </div>
          <div className="text-xs text-muted mb-6 text-center">{stepTitles[step-1]}</div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}

          <div className="bg-white border border-border rounded-2xl p-8">
            {/* Step 1: Arsa Bilgileri */}
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-head font-extrabold text-xl mb-2 flex items-center gap-2"><MapPin size={20} className="text-primary" /> Arsa Bilgileri</h2>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Proje Adı</label>
                  <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="örn: Denizli Ev Projesi" className="input" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">İl</label>
                    <select value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="input">
                      <option value="">Seçin</option>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">İlçe</label>
                    <input value={form.district} onChange={e => setForm({...form, district: e.target.value})} placeholder="İlçe" className="input" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Alan (m²)</label>
                    <input type="number" value={form.area} onChange={e => setForm({...form, area: e.target.value})} placeholder="120" className="input" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Kat Sayısı</label>
                    <select value={form.floors} onChange={e => setForm({...form, floors: e.target.value})} className="input">
                      <option value="1">1 Kat</option>
                      <option value="2">2 Kat</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Yapı Tipi</label>
                    <select value={form.buildType} onChange={e => setForm({...form, buildType: e.target.value})} className="input">
                      <option value="betonarme">Betonarme</option>
                      <option value="celik">Çelik</option>
                      <option value="ahsap">Ahşap</option>
                      <option value="prefabrik">Prefabrik</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Bütçe (TL) — opsiyonel</label>
                  <input type="number" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} placeholder="2000000" className="input" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Notlar</label>
                  <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Özel istekler, zemin durumu, vs." className="input h-20 resize-none" />
                </div>
                {estimate && (
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mt-2">
                    <div className="text-xs font-bold uppercase tracking-wide text-primary mb-1">🤖 AI Tahmini Maliyet</div>
                    <div className="font-head font-extrabold text-2xl text-primary">{(estimate.min/1e6).toFixed(1)}M – {(estimate.max/1e6).toFixed(1)}M TL</div>
                    <div className="text-xs text-muted mt-1">Arsa hariç · {form.area}m² · {form.city}</div>
                  </div>
                )}
                <button onClick={() => setStep(2)} disabled={!form.name || !form.city || !form.area} className="btn-primary w-full mt-2 disabled:opacity-50">Devam →</button>
              </div>
            )}

            {/* Step 2: Belgeler */}
            {step === 2 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-head font-extrabold text-xl mb-2 flex items-center gap-2"><FileText size={20} className="text-primary" /> Belge Yükleme</h2>
                <p className="text-sm text-muted">Aşağıdaki belgeleri yükleyin. Şu an yoksa sonra da ekleyebilirsiniz.</p>
                {[
                  { key: 'tapu', label: 'Tapu Belgesi', desc: 'Arsanın size ait olduğunu kanıtlar', required: true },
                  { key: 'ruhsat', label: 'Yapı Ruhsatı', desc: 'Belediyeden alınan inşaat izni', required: false },
                  { key: 'etud', label: 'Zemin Etüd Raporu', desc: 'Zeminin yapıya uygunluğu', required: false },
                ].map((doc) => (
                  <div key={doc.key} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-semibold text-sm">{doc.label} {doc.required && <span className="text-red-500">*</span>}</div>
                        <div className="text-xs text-muted">{doc.desc}</div>
                      </div>
                      {(files as any)[doc.key] ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : null}
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer bg-surface hover:bg-surface2 border border-border rounded-lg px-4 py-2.5 transition-colors">
                      <Upload size={14} className="text-muted" />
                      <span className="text-xs text-muted">{(files as any)[doc.key] ? (files as any)[doc.key].name : 'Dosya seç (PDF, JPG)'}</span>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => {
                        if (e.target.files?.[0]) setFiles({...files, [doc.key]: e.target.files[0]})
                      }} />
                    </label>
                  </div>
                ))}
                <div className="flex gap-3 mt-2">
                  <button onClick={() => setStep(1)} className="btn-ghost flex-1">← Geri</button>
                  <button onClick={() => setStep(3)} className="btn-primary flex-1">Devam →</button>
                </div>
              </div>
            )}

            {/* Step 3: Fotoğraflar */}
            {step === 3 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-head font-extrabold text-xl mb-2 flex items-center gap-2"><Camera size={20} className="text-primary" /> Arsa Fotoğrafları</h2>
                <p className="text-sm text-muted">Arsanızın 4 yönden fotoğrafını yükleyin. AI analiz edecek.</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Ön Görünüm', 'Arka Görünüm', 'Sol Görünüm', 'Sağ Görünüm'].map((label, i) => (
                    <label key={i} className="cursor-pointer">
                      <div className={`border-2 border-dashed rounded-xl h-32 flex flex-col items-center justify-center transition-colors ${photos[i] ? 'border-green-400 bg-green-50' : 'border-border hover:border-primary'}`}>
                        {photos[i] ? (
                          <><CheckCircle size={24} className="text-green-500 mb-1" /><span className="text-xs text-green-700">{photos[i].name.slice(0,20)}</span></>
                        ) : (
                          <><Camera size={24} className="text-muted mb-1" /><span className="text-xs text-muted">{label}</span></>
                        )}
                      </div>
                      <input type="file" accept="image/*" className="hidden" onChange={e => {
                        if (e.target.files?.[0]) { const p = [...photos]; p[i] = e.target.files[0]; setPhotos(p) }
                      }} />
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <button onClick={() => setStep(2)} className="btn-ghost flex-1">← Geri</button>
                  <button onClick={() => setStep(4)} className="btn-primary flex-1">Devam →</button>
                </div>
              </div>
            )}

            {/* Step 4: Hizmet Seçimi */}
            {step === 4 && (
              <div className="flex flex-col gap-4">
                <h2 className="font-head font-extrabold text-xl mb-2 flex items-center gap-2"><Home size={20} className="text-primary" /> Hangi hizmetleri istiyorsunuz?</h2>
                <p className="text-sm text-muted">İhtiyacınıza göre seçin, size uygun uzmanları eşleştireceğiz.</p>
                {[
                  { key: 'proje', label: 'Mimari Proje Çizimi', desc: 'Mimar atanması, proje ve ruhsat süreci' },
                  { key: 'insaat', label: 'İnşaat & Usta Koordinasyonu', desc: 'Ustalar, kaba/ince inşaat, tesisat, elektrik' },
                  { key: 'malzeme', label: 'Malzeme Tedariği', desc: 'Tuğla, çimento, demir, doğrama vb. en uygun fiyat' },
                ].map(s => (
                  <label key={s.key} className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${(stages as any)[s.key] ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <input type="checkbox" checked={(stages as any)[s.key]} onChange={e => setStages({...stages, [s.key]: e.target.checked})} className="mt-1 accent-primary" />
                    <div>
                      <div className="font-semibold text-sm">{s.label}</div>
                      <div className="text-xs text-muted mt-0.5">{s.desc}</div>
                    </div>
                  </label>
                ))}

                {estimate && (
                  <div className="bg-surface rounded-xl p-5 mt-2">
                    <div className="text-xs font-bold text-muted uppercase tracking-wide mb-3">Proje Özeti</div>
                    <div className="flex flex-col gap-1.5 text-sm">
                      <div className="flex justify-between"><span className="text-muted">Konum</span><span className="font-semibold">{form.city} / {form.district}</span></div>
                      <div className="flex justify-between"><span className="text-muted">Alan</span><span className="font-semibold">{form.area} m²</span></div>
                      <div className="flex justify-between"><span className="text-muted">Kat</span><span className="font-semibold">{form.floors}</span></div>
                      <div className="flex justify-between"><span className="text-muted">Tahmini Maliyet</span><span className="font-semibold text-primary">{(estimate.min/1e6).toFixed(1)}M – {(estimate.max/1e6).toFixed(1)}M TL</span></div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-2">
                  <button onClick={() => setStep(3)} className="btn-ghost flex-1">← Geri</button>
                  <button onClick={handleSubmit} disabled={loading} className="btn-primary flex-1 disabled:opacity-50">
                    {loading ? 'Gönderiliyor...' : 'Projeyi Gönder'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Tamamlandı */}
            {step === 5 && (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="font-head font-extrabold text-2xl mb-3">Projeniz gönderildi!</h2>
                <p className="text-muted text-sm mb-2">{form.name} projeniz onay sürecine alındı.</p>
                <p className="text-muted text-sm mb-6">Ekibimiz inceledikten sonra size uygun uzmanları eşleştireceğiz. E-posta ile bilgilendirileceksiniz.</p>
                <button onClick={() => router.push('/dashboard')} className="btn-primary">Dashboard'a Git →</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
