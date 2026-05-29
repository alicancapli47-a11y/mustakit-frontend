'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, LogOut, User, LayoutDashboard } from 'lucide-react'

export function Navbar() {
  const { data: session } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-head font-extrabold text-xl text-primary tracking-tight">
          Müstakit
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/#nasil-calisir" className="hover:text-primary transition-colors">Nasıl Çalışır</Link>
          <Link href="/#paketler" className="hover:text-primary transition-colors">Paketler</Link>
          <Link href="/uzmanlar" className="hover:text-primary transition-colors">Uzmanlar</Link>
          <Link href="/dukkan" className="hover:text-primary transition-colors">Dükkan</Link>
        </div>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-surface transition-colors"
              >
                {session.user?.image ? (
                  <img src={session.user.image} className="w-7 h-7 rounded-full" alt="" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {session.user?.name?.[0]}
                  </div>
                )}
                <span className="text-sm font-medium">{session.user?.name?.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-border rounded-xl shadow-modal py-1 z-50">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <LayoutDashboard size={14} />
                    Dashboard
                  </Link>
                  <Link
                    href="/profil"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface transition-colors"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User size={14} />
                    Profilim
                  </Link>
                  {(session.user as any)?.role === 'ADMIN' && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-surface text-primary font-medium transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <LayoutDashboard size={14} />
                      Admin Panel
                    </Link>
                  )}
                  <div className="border-t border-border my-1" />
                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={14} />
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => signIn('google')}
                className="btn-ghost text-sm"
              >
                Giriş Yap
              </button>
              <button
                onClick={() => signIn('google')}
                className="btn-primary text-sm"
              >
                Üye Ol
              </button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-3">
          <Link href="/#nasil-calisir" className="text-sm font-medium py-2">Nasıl Çalışır</Link>
          <Link href="/#paketler" className="text-sm font-medium py-2">Paketler</Link>
          <Link href="/uzmanlar" className="text-sm font-medium py-2">Uzmanlar</Link>
          <Link href="/dukkan" className="text-sm font-medium py-2">Dükkan</Link>
          <div className="border-t border-border pt-3 flex flex-col gap-2">
            {session ? (
              <button onClick={() => signOut()} className="btn-ghost text-sm">Çıkış Yap</button>
            ) : (
              <>
                <button onClick={() => signIn('google')} className="btn-ghost text-sm">Giriş Yap</button>
                <button onClick={() => signIn('google')} className="btn-primary text-sm">Üye Ol</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
