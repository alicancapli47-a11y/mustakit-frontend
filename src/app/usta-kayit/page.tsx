'use client'
import { useState, useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Upload, CheckCircle, Wrench } from 'lucide-react'

const uzmanliklar = [
  'Temel Ustası', 'Duvar Ustası', 'Çatı Ustası', 'Elektrikçi', 'Tesisatçı',
  'Sıva & Boya Ustası', 'Doğramacı', 'Mimar', 'İç Mimar', 'Peyzaj', 'Diğer'
]

const cities = [
  'Adana','Ankara','Antalya','Aydın','Balıkesir','Bursa','Denizli',
  'Diyarbakır','Eskişehir','İstanbul','İzmir','Kocaeli','Konya',
  'Malatya','Mersin','Muğla','Samsun','Trabzon','Diğer'
]

export default function UstaKayitPage() {
  const [user, setUser] = useState<any>(null)
  const [form, setForm] = useState({
    type: '', bio: '', city: '', phone: '', experience: '', priceMin: '', priceMax: ''
  })
  const [certFile, setCertFile] = useState<File | null>(null)
  const [idFile, setIdFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (!u) { window.location.href = '/giris'; return }
    setUser(JSON.parse(u))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.type || !form.city) {
      setError('Uzmanlık alanı ve şehir zorunludur')
      return
    }
    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/professionals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user?.id,
          name: user?.name,
          email: user?.email,
          type: form.type,
          bio: form.bio,
          city: form.city,
          phone: form.phone,
          experience: form.experience,
          priceMin: form.priceMin ? Number(form.priceMin) : undefined,
          priceMax: form.priceMax ? Number(form.priceMax) : undefined,
          certFile: certFile?.name,
          idFile: idFile?.name,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Kayıt başarısız')
        return
      }
      setSuccess(true)
    } catch {
      setError('Sunucuya bağlanılamadı')
    } finally {
      setLoading(false)
    }
  }

  if (success) return (
    <>
      <Navbar />
      <div className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="bg-white border border-border rounded-2xl shadow-card p-10 max-w-md text-center">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
          <h2 className="font-head font-bold text-xl mb-2">Başvurunuz alındı!</h2>
          <p className="text-muted text-sm mb-4">
            Ekibimiz bilgilerinizi inceleyecek ve onaylandığında e-posta ile bilgilendirileceksiniz.
          </p>
          <p className="text-xs text-muted mb-6">Onay süreci genellikle 1-2 iş günü sürer.</p>
          <a href="/dashboard" className="btn-primary inline-block">Dashboard'a Git</a>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface py-10 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white border border-border rounded-2xl p-8">
            <h1 className="font-head font-extrabold text-2xl mb-2 flex items-center gap-2">
              <Wrench size={22} className="text-primary" /> Usta / Uzman Kayıt
            </h1>
            <p className="text-muted text-sm mb-6">
              Bilgilerinizi doldurun, onaylandıktan sonra iş teklifleri almaya başlayın.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Uzmanlık Alanı *</label>
                <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="input" required>
                  <option value="">Seçin</option>
                  {uzmanliklar.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şehir *</label>
                  <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="input" required>
                    <option value="">Seçin</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Telefon</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="0555 000 00 00" className="input" />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Deneyim (Yıl)</label>
                <input value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} placeholder="örn: 10" className="input" />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Hakkınızda</label>
                <textarea value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })}
                  placeholder="Kendinizi ve deneyimlerinizi anlatın..." className="input h-24 resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Min Günlük Ücret (TL)</label>
                  <input type="number" value={form.priceMin} onChange={e => setForm({ ...form, priceMin: e.target.value })} placeholder="500" className="input" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Max Günlük Ücret (TL)</label>
                  <input type="number" value={form.priceMax} onChange={e => setForm({ ...form, priceMax: e.target.value })} placeholder="1200" className="input" />
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">Uzmanlık Belgesi</div>
                <label className="flex items-center gap-2 cursor-pointer bg-surface hover:bg-surface2 border border-border rounded-lg px-4 py-2.5 transition-colors">
                  <Upload size={14} className="text-muted" />
                  <span className="text-xs text-muted">{certFile ? certFile.name : 'Diploma, sertifika veya referans yükleyin'}</span>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden"
                    onChange={e => { if (e.target.files?.[0]) setCertFile(e.target.files[0]) }} />
                </label>
              </div>

              <div className="border border-border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">Kimlik Belgesi *</div>
                <label className="flex items-center gap-2 cursor-pointer bg-surface hover:bg-surface2 border border-border rounded-lg px-4 py-2.5 transition-colors">
                  <Upload size={14} className="text-muted" />
                  <span className="text-xs text-muted">{idFile ? idFile.name : 'TC Kimlik ön/arka yükleyin'}</span>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden"
                    onChange={e => { if (e.target.files?.[0]) setIdFile(e.target.files[0]) }} />
                </label>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full mt-2 disabled:opacity-50">
                {loading ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
