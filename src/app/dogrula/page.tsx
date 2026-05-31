'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

function DogrulaContent() {
  const params = useSearchParams()
  const token = params.get('token')
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (!token) { setStatus('error'); setMsg('Geçersiz link'); return }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/email-auth/verify?token=${token}`)
      .then(r => r.json())
      .then(data => {
        if (data.success) { setStatus('success'); setMsg('E-posta doğrulandı!') }
        else { setStatus('error'); setMsg(data.error || 'Doğrulama başarısız') }
      })
      .catch(() => { setStatus('error'); setMsg('Sunucuya bağlanılamadı') })
  }, [token])

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white border border-border rounded-2xl shadow-card p-10 w-full max-w-sm text-center">
        {status === 'loading' && <><Loader2 className="animate-spin text-primary mx-auto mb-4" size={40} /><p className="text-muted">Doğrulanıyor...</p></>}
        {status === 'success' && <><CheckCircle className="text-green-500 mx-auto mb-4" size={48} /><h2 className="font-head font-bold text-xl mb-2">{msg}</h2><p className="text-muted text-sm mb-6">Artık giriş yapabilirsiniz.</p><Link href="/giris" className="btn-primary inline-block">Giriş Yap</Link></>}
        {status === 'error' && <><XCircle className="text-red-500 mx-auto mb-4" size={48} /><h2 className="font-head font-bold text-xl mb-2">Hata</h2><p className="text-muted text-sm mb-6">{msg}</p><Link href="/giris" className="btn-primary inline-block">Giriş Sayfası</Link></>}
      </div>
    </div>
  )
}

export default function DogrulaPage() {
  return <Suspense fallback={<div className="min-h-screen bg-surface flex items-center justify-center"><Loader2 className="animate-spin text-primary" size={40} /></div>}><DogrulaContent /></Suspense>
}
