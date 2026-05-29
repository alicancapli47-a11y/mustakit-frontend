import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="text-center">
          <div className="font-head font-extrabold text-8xl text-border mb-4">404</div>
          <h1 className="font-head font-bold text-2xl mb-3">Sayfa bulunamadı</h1>
          <p className="text-muted text-sm mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
          <Link href="/" className="btn-primary">Ana Sayfaya Dön</Link>
        </div>
      </main>
    </>
  )
}
