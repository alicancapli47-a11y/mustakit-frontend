'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function GirisPage() {
  const [tab, setTab] = useState<'giris' | 'kayit'>('giris')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [registerForm, setRegisterForm] = useState({
    name: '', email: '', password: '', phone: '', city: '',
    userType: 'ARSA_SAHIBI', acceptedTerms: false, acceptedPrivacy: false,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Giriş başarısız')
        return
      }
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      window.location.href = '/dashboard'
    } catch {
      setError('Sunucuya bağlanılamadı')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!registerForm.acceptedTerms || !registerForm.acceptedPrivacy) {
      setError('Sözleşmeleri kabul etmelisiniz')
      return
    }
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...registerForm, acceptedTerms: true }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Kayıt başarısız')
        return
      }
      setSuccess('✅ Kayıt başarılı! Doğrulama maili gönderildi. E-postanızı kontrol edin.')
      setRegisterForm({ name: '', email: '', password: '', phone: '', city: '', userType: 'ARSA_SAHIBI', acceptedTerms: false, acceptedPrivacy: false })
    } catch {
      setError('Sunucuya bağlanılamadı')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <div className="bg-white border border-border rounded-2xl shadow-card w-full max-w-md">
        <div className="text-center pt-8 pb-6 px-8 border-b border-border">
          <Link href="/" className="font-head font-extrabold text-2xl text-primary">Müstakit</Link>
          <p className="text-muted text-sm mt-1">Tekele değil, ustana güven</p>
        </div>
        <div className="flex border-b border-border">
          <button onClick={() => { setTab('giris'); setError(''); setSuccess('') }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${tab === 'giris' ? 'text-primary border-b-2 border-primary' : 'text-muted hover:text-gray-700'}`}>
            Giriş Yap
          </button>
          <button onClick={() => { setTab('kayit'); setError(''); setSuccess('') }}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${tab === 'kayit' ? 'text-primary border-b-2 border-primary' : 'text-muted hover:text-gray-700'}`}>
            Üye Ol
          </button>
        </div>
        <div className="p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4 flex items-start gap-2">
              <CheckCircle size={16} className="shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}
          <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full flex items-center justify-center gap-3 border border-border rounded-lg px-4 py-3 text-sm font-medium hover:bg-surface transition-colors mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
              <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
              <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"/>
              <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
            </svg>
            Google ile Devam Et
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted">veya e-posta ile</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          {tab === 'giris' && (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">E-posta</label>
                <input type="email" required value={loginForm.email}
                  onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="ornek@mail.com" className="input" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şifre</label>
                <div className="relative">
                  <input type={showPass ? 'text' : 'password'} required value={loginForm.password}
                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="••••••••" className="input pr-10" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <Link href="/sifremi-unuttum" className="text-xs text-primary hover:underline">Şifremi Unuttum</Link>
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </button>
            </form>
          )}
          {tab === 'kayit' && (
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Ad Soyad</label>
                  <input required value={registerForm.name}
                    onChange={e => setRegisterForm({ ...registerForm, name: e.target.value })}
                    placeholder="Adınız" className="input" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Telefon</label>
                  <input value={registerForm.phone}
                    onChange={e => setRegisterForm({ ...registerForm, phone: e.target.value })}
                    placeholder="0555 000 00 00" className="input" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">E-posta</label>
                <input type="email" required value={registerForm.email}
                  onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
                  placeholder="ornek@mail.com" className="input" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şifre</label>
                <div className="relative">
                  <input type={showPass ? 'text' : 'password'} required value={registerForm.password}
                    onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
                    placeholder="En az 8 karakter" className="input pr-10" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Şehir</label>
                  <input value={registerForm.city}
                    onChange={e => setRegisterForm({ ...registerForm, city: e.target.value })}
                    placeholder="İstanbul" className="input" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Kullanıcı Tipi</label>
                  <select value={registerForm.userType}
                    onChange={e => setRegisterForm({ ...registerForm, userType: e.target.value })}
                    className="input">
                    <option value="ARSA_SAHIBI">Arsa Sahibi</option>
                    <option value="MIMAR">Mimar</option>
                    <option value="USTA">Usta / Zanaatkar</option>
                    <option value="MALZEMECI">Malzemeci</option>
                    <option value="DIGER">Diğer</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={registerForm.acceptedTerms}
                    onChange={e => setRegisterForm({ ...registerForm, acceptedTerms: e.target.checked })}
                    className="mt-0.5 accent-primary" />
                  <span className="text-xs text-gray-600">
                    <Link href="/kullanim-kosullari" target="_blank" className="text-primary hover:underline font-semibold">Kullanım Koşulları</Link>'nı ve{' '}
                    <Link href="/uyelik-sozlesmesi" target="_blank" className="text-primary hover:underline font-semibold">Üyelik Sözleşmesi</Link>'ni okudum, kabul ediyorum.
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={registerForm.acceptedPrivacy}
                    onChange={e => setRegisterForm({ ...registerForm, acceptedPrivacy: e.target.checked })}
                    className="mt-0.5 accent-primary" />
                  <span className="text-xs text-gray-600">
                    <Link href="/gizlilik" target="_blank" className="text-primary hover:underline font-semibold">Gizlilik Politikası</Link>'nı okudum, kabul ediyorum.
                  </span>
                </label>
              </div>
              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Kayıt olunuyor...
                  </span>
                ) : 'Üye Ol'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
