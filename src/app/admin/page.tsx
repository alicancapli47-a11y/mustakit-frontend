'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, FolderOpen, ShieldCheck, TrendingUp, AlertCircle, CheckCircle, Clock, Loader2 } from 'lucide-react'

export default function AdminPage() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const API = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    fetch(`${API}/admin/stats`, {
      headers: { 'x-admin-key': 'mustakit_admin_2025' }
    })
      .then(r => r.json())
      .then(data => { setStats(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-2xl font-extrabold">Dashboard</h1>
          <p className="text-muted text-sm mt-0.5">Müstakit Admin Paneli</p>
        </div>
        <Link href="/proje/yeni" className="btn-primary text-sm">+ Yeni Proje</Link>
      </div>

      {/* Stats */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Toplam Kullanıcı', value: stats?.users ?? 0, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
              { label: 'Aktif Proje', value: stats?.activeProjects ?? 0, icon: FolderOpen, color: 'text-primary', bg: 'bg-primary/10' },
              { label: 'Onay Bekleyen', value: stats?.pendingProfessionals ?? 0, icon: ShieldCheck, color: 'text-amber-500', bg: 'bg-amber-50' },
              { label: 'Onaylı Uzman', value: stats?.professionals ?? 0, icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5">
                <div className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center mb-3`}>
                  <s.icon size={16} className={s.color} />
                </div>
                <div className="font-head font-extrabold text-2xl mb-0.5">{s.value}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Hızlı Erişim */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Link href="/admin/onaylar" className="bg-white border border-border rounded-xl p-5 hover:border-primary transition-colors">
              <ShieldCheck size={20} className="text-amber-500 mb-3" />
              <div className="font-semibold text-sm mb-1">Onay Bekleyenler</div>
              <div className="text-xs text-muted">Usta başvurularını incele ve onayla</div>
            </Link>
            <Link href="/admin/kullanicilar" className="bg-white border border-border rounded-xl p-5 hover:border-primary transition-colors">
              <Users size={20} className="text-blue-500 mb-3" />
              <div className="font-semibold text-sm mb-1">Kullanıcılar</div>
              <div className="text-xs text-muted">Tüm üyeleri görüntüle ve yönet</div>
            </Link>
            <Link href="/admin/mail" className="bg-white border border-border rounded-xl p-5 hover:border-primary transition-colors">
              <TrendingUp size={20} className="text-green-500 mb-3" />
              <div className="font-semibold text-sm mb-1">Toplu Mail</div>
              <div className="text-xs text-muted">Tüm üyelere duyuru gönder</div>
            </Link>
          </div>

          {/* Site linkleri */}
          <div className="bg-white border border-border rounded-xl p-5">
            <div className="font-head font-bold text-sm mb-4">Hızlı Linkler</div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'mustakit.com', href: 'https://mustakit.com' },
                { label: 'studio.mustakit.com', href: 'https://studio.mustakit.com' },
                { label: 'api.mustakit.com/health', href: 'https://api.mustakit.com/health' },
              ].map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer"
                  className="text-xs text-primary border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors">
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
