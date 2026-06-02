import { Navbar } from '@/components/layout/Navbar'
import Link from 'next/link'

export default function UzmanlarPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl mb-4">🔨</div>
          <h1 className="font-head font-bold text-2xl mb-3">Yakında</h1>
          <p className="text-muted text-sm mb-6 max-w-sm">Onaylı usta ve uzman profilleri çok yakında burada olacak.</p>
          <Link href="/" className="btn-primary">Ana Sayfaya Dön</Link>
        </div>
      </main>
    </>
  )
}
