'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, FolderOpen, Mail, ShieldCheck, Settings, ChevronLeft, Menu, Lock } from 'lucide-react'

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/kullanicilar', icon: Users, label: 'Kullanıcılar' },
  { href: '/admin/projeler', icon: FolderOpen, label: 'Projeler' },
  { href: '/admin/onaylar', icon: ShieldCheck, label: 'Onay Bekleyenler' },
  { href: '/admin/mail', icon: Mail, label: 'Toplu Mail' },
  { href: '/admin/ayarlar', icon: Settings, label: 'Ayarlar' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [authorized, setAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') setAuthorized(true)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'mustakit_admin_2025') {
      sessionStorage.setItem('admin_auth', 'true')
      setAuthorized(true)
    } else {
      setError('Yanlış şifre')
    }
  }

  if (!authorized) return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white border border-border rounded-2xl shadow-card p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <Lock size={32} className="text-primary mx-auto mb-3" />
          <h1 className="font-head font-bold text-xl">Admin Panel</h1>
          <p className="text-muted text-sm mt-1">Erişim için şifre girin</p>
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError('') }} placeholder="Admin şifresi" className="input" autoFocus />
          <button type="submit" className="btn-primary w-full">Giriş</button>
        </form>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-surface flex">
      <aside className={`${collapsed ? 'w-16' : 'w-56'} bg-gray-900 text-white flex flex-col transition-all duration-200 shrink-0`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {!collapsed && <Link href="/" className="font-head font-extrabold text-lg text-primary">Müstakit</Link>}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white p-1">
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        {!collapsed && <div className="px-4 py-3 border-b border-gray-800"><div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Admin Panel</div></div>}
        <nav className="flex-1 py-3">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${pathname === item.href ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
              <item.icon size={16} className="shrink-0" />{!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <Link href="/" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white"><ChevronLeft size={14} />{!collapsed && 'Siteye Dön'}</Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
          <div className="text-sm font-medium">{navItems.find(n => n.href === pathname)?.label || 'Admin'}</div>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">A</div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
