'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, FolderOpen, Mail,
  ShieldCheck, Package, Bell, Settings,
  ChevronLeft, Menu
} from 'lucide-react'

const navItems = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/kullanicilar', icon: Users, label: 'Kullanıcılar' },
  { href: '/admin/projeler', icon: FolderOpen, label: 'Projeler' },
  { href: '/admin/onaylar', icon: ShieldCheck, label: 'Onay Bekleyenler', badge: 3 },
  { href: '/admin/mail', icon: Mail, label: 'Toplu Mail' },
  { href: '/admin/bildirimler', icon: Bell, label: 'Bildirimler' },
  { href: '/admin/urunler', icon: Package, label: 'Ürünler' },
  { href: '/admin/ayarlar', icon: Settings, label: 'Ayarlar' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className={`${collapsed ? 'w-16' : 'w-56'} bg-gray-900 text-white flex flex-col transition-all duration-200 shrink-0`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          {!collapsed && (
            <Link href="/" className="font-head font-extrabold text-lg text-primary">Müstakit</Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="text-gray-400 hover:text-white p-1">
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {!collapsed && (
          <div className="px-4 py-3 border-b border-gray-800">
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Admin Panel</div>
          </div>
        )}

        <nav className="flex-1 py-3">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors relative ${
                  active ? 'bg-primary/20 text-primary' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon size={16} className="shrink-0" />
                {!collapsed && <span>{item.label}</span>}
                {!collapsed && item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link href="/" className={`flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors`}>
            <ChevronLeft size={14} />
            {!collapsed && 'Siteye Dön'}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
          <div className="text-sm text-muted">
            {navItems.find(n => n.href === pathname)?.label || 'Admin'}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">A</div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
