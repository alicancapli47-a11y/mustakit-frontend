'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react'

export default function SifremiUnuttumPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Hata oluştu')
        return
      }
      setSuccess(true)
    } catch {
      setError('Sunucuya bağlanılamadı')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white border border-border rounded-2xl shadow-card w-full max-w-sm p-8">
        <div className="text-center mb-6">
          <Link href="/" className="font-head font-extrabold text-xl text-primary">Müstakit</Link>
        </div>

        {success ? (
          <div className="text-center">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
            <h2 className="font-head font-bold text-lg mb-2">Mail gönderildi!</h2>
            <p className="text-muted text-sm mb-6">
              <strong>{email}</strong> adresine şifre sıfırlama linki gönderdik. Lütfen e-postanızı kontrol edin.
            </p>
            <Link href="/giris" className="btn-primary w-full block text-center">Giriş Sayfasına Dön</Link>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h1 className="font-head font-bold text-lg">Şifremi Unuttum</h1>
                <p className="text-muted text-xs">E-postanıza sıfırlama linki gönderilecek</p>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">E-posta</label>
                <input
                  type="email" required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  className="input"
                  autoFocus
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? 'Gönderiliyor...' : 'Sıfırlama Linki Gönder'}
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link href="/giris" className="flex items-center justify-center gap-1 text-xs text-muted hover:text-primary transition-colors">
                <ArrowLeft size={12} /> Giriş sayfasına dön
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
