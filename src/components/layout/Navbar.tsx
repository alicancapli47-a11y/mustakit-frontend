'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, LogOut, User, LayoutDashboard, Wrench } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (u) setUser(JSON.parse(u))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-head font-extrabold text-xl text-primary tracking-tight">Müstakit</Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#nasil-calisir" className="hover:text-primary transition-colors">Nasıl Çalışır</Link>
          <Link href="/#paketler" className="hover:text-primary transition-colors">Paketler</Link>
          <Link href="/uzmanlar" className="hover:text-primary transition-colors">Uzmanlar</Link>
          <Link href="/mustakil-ev-maliyeti" className="hover:text-primary transition-colors">Maliyet Hesapla</Link>
          <Link href="/usta-kayit" className="hover:text-primary transition-colors">Usta Ol</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="relative">
              <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-surface transition-colors">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {user.name?.[0]}
                </div>
                <span className="text-sm font-medium">{user.name?.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-border rounded-xl shadow-modal py-1 z-50">
                  <Link href="/dashboard" onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface transition-colors">
                    <LayoutDashboard size={14} /> Dashboard
                  </Link>
                  <Link href="/usta-kayit" onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface transition-colors">
                    <Wrench size={14} /> Usta Kayıt
                  </Link>
                  {user.role === 'ADMIN' && (
                    <Link href="/admin" onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface text-primary font-medium transition-colors">
                      <LayoutDashboard size={14} /> Admin Panel
                    </Link>
                  )}
                  <div className="border-t border-border my-1" />
                  <button onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                    <LogOut size={14} /> Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/giris" className="btn-ghost text-sm">Giriş Yap</Link>
              <Link href="/giris" className="btn-primary text-sm">Üye Ol</Link>
            </>
          )}
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
          <Link href="/mustakil-ev-maliyeti" className="text-sm font-medium py-2">Maliyet Hesapla</Link>
          <Link href="/usta-kayit" className="text-sm font-medium py-2">Usta Ol</Link>
          <div className="border-t border-border pt-3 flex flex-col gap-2">
            {user ? (
              <>
                <Link href="/dashboard" className="btn-ghost text-sm text-center">Dashboard</Link>
                <button onClick={handleLogout} className="btn-ghost text-sm text-red-500">Çıkış Yap</button>
              </>
            ) : (
              <>
                <Link href="/giris" className="btn-ghost text-sm text-center">Giriş Yap</Link>
                <Link href="/giris" className="btn-primary text-sm text-center">Üye Ol</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
