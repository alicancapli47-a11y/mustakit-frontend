'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-head font-extrabold text-xl text-primary tracking-tight">
          Müstakit
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#nasil-calisir" className="hover:text-primary transition-colors">Nasıl Çalışır</Link>
          <Link href="/#paketler" className="hover:text-primary transition-colors">Paketler</Link>
          <Link href="/uzmanlar" className="hover:text-primary transition-colors">Uzmanlar</Link>
          <Link href="/dukkan" className="hover:text-primary transition-colors">Dükkan</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/giris" className="btn-ghost text-sm">Giriş Yap</Link>
          <Link href="/giris" className="btn-primary text-sm">Üye Ol</Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-3">
          <Link href="/#nasil-calisir" className="text-sm font-medium py-2">Nasıl Çalışır</Link>
          <Link href="/#paketler" className="text-sm font-medium py-2">Paketler</Link>
          <Link href="/uzmanlar" className="text-sm font-medium py-2">Uzmanlar</Link>
          <Link href="/dukkan" className="text-sm font-medium py-2">Dükkan</Link>
          <div className="border-t border-border pt-3 flex flex-col gap-2">
            <Link href="/giris" className="btn-ghost text-sm text-center">Giriş Yap</Link>
            <Link href="/giris" className="btn-primary text-sm text-center">Üye Ol</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
