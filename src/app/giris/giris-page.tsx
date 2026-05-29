'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function GirisPage() {
  const [loading, setLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setLoading(true)
    await signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white border border-border rounded-2xl shadow-card p-8 w-full max-w-sm">

        <div className="text-center mb-8">
          <div className="font-head font-extrabold text-2xl text-primary mb-2">Müstakit</div>
          <h1 className="font-head font-bold text-xl mb-1">Hoş geldiniz</h1>
          <p className="text-sm text-muted">Devam etmek için giriş yapın</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 border border-border rounded-lg px-4 py-3 text-sm font-medium hover:bg-surface transition-colors disabled:opacity-60"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
            <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"/>
            <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
          </svg>
          {loading ? 'Yönlendiriliyor...' : 'Google ile Devam Et'}
        </button>

        <div className="mt-6 text-center text-xs text-muted">
          Giriş yaparak{' '}
          <a href="/kullanim-kosullari" className="text-primary hover:underline">Kullanım Koşulları</a>
          {' '}ve{' '}
          <a href="/gizlilik" className="text-primary hover:underline">Gizlilik Politikası</a>
          'nı kabul etmiş olursunuz.
        </div>
      </div>
    </div>
  )
}
