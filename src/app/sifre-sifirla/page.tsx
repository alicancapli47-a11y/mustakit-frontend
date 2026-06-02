'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, CheckCircle, XCircle, Loader2 } from 'lucide-react'

function SifreSifirlaContent() {
  const params = useSearchParams()
  const token = params.get('token')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [validating, setValidating] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Token'ı backend'de doğrula
  useEffect(() => {
    if (!token) { setValidating(false); return }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/validate-reset-token?token=${token}`)
      .then(r => r.json())
      .then(data => {
        setTokenValid(data.valid === true)
        setValidating(false)
      })
      .catch(() => {
        setTokenValid(false)
        setValidating(false)
      })
  }, [token])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 8) { setError('Şifre en az 8 karakter olmalıdır'); return }
    if (password !== confirm) { setError('Şifreler eşleşmiyor'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Hata oluştu'); return }
      setSuccess(true)
    } catch {
      setError('Sunucuya bağlanılamadı')
    } finally {
      setLoading(false)
    }
  }

  if (validating) return (
    <div className="text-center py-8">
      <Loader2 size={32} className="animate-spin text-primary mx-auto mb-3" />
      <p className="text-muted text-sm">Link doğrulanıyor...</p>
    </div>
  )

  if (!token || !tokenValid) return (
    <div className="text-center">
      <XCircle size={48} className="text-red-500 mx-auto mb-4" />
      <h2 className="font-head font-bold text-lg mb-2">Geçersiz veya süresi dolmuş link</h2>
      <p className="text-muted text-sm mb-6">
        Bu şifre sıfırlama linki geçersiz veya 1 saatlik süresi dolmuş olabilir.
      </p>
      <Link href="/sifremi-unuttum" className="btn-primary inline-block">Yeni Link İste</Link>
    </div>
  )

  if (success) return (
    <div className="text-center">
      <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
      <h2 className="font-head font-bold text-lg mb-2">Şifre güncellendi!</h2>
      <p className="text-muted text-sm mb-6">Yeni şifrenizle giriş yapabilirsiniz.</p>
      <Link href="/giris" className="btn-primary inline-block">Giriş Yap</Link>
    </div>
  )

  return (
    <>
      <h1 className="font-head font-bold text-lg mb-1">Yeni Şifre Belirle</h1>
      <p className="text-muted text-xs mb-6">En az 8 karakter kullanın</p>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Yeni Şifre</label>
          <div className="relative">
            <input type={showPass ? 'text' : 'password'} required
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder="En az 8 karakter" className="input pr-10" />
            <button type="button" onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
              {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şifre Tekrar</label>
          <input type={showPass ? 'text' : 'password'} required
            value={confirm} onChange={e => setConfirm(e.target.value)}
            placeholder="Şifreyi tekrar girin" className="input" />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
          {loading ? 'Güncelleniyor...' : 'Şifreyi Güncelle'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/giris" className="text-xs text-muted hover:text-primary">Giriş sayfasına dön</Link>
      </div>
    </>
  )
}

export default function SifreSifirlaPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white border border-border rounded-2xl shadow-card w-full max-w-sm p-8">
        <div className="text-center mb-6">
          <Link href="/" className="font-head font-extrabold text-xl text-primary">Müstakit</Link>
        </div>
        <Suspense fallback={<div className="text-center text-muted text-sm py-8">Yükleniyor...</div>}>
          <SifreSifirlaContent />
        </Suspense>
      </div>
    </div>
  )
}
