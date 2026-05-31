'use client'
import { useEffect, useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import Link from 'next/link'
import { Plus, Home, Clock, CheckCircle, AlertCircle, FileText, Camera, LogOut } from 'lucide-react'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (!u) { window.location.href = '/giris'; return }
    setUser(JSON.parse(u))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  if (!user) return null

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-head text-2xl font-extrabold">Merhaba, {user.name?.split(' ')[0]} 👋</h1>
              <p className="text-muted text-sm mt-1">
                {user.role === 'ADMIN' && <Link href="/admin" className="text-primary font-semibold hover:underline mr-3">Admin Panel →</Link>}
                Projelerinizi buradan yönetin.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/proje/yeni" className="btn-primary flex items-center gap-2 text-sm"><Plus size={16} /> Yeni Proje</Link>
              <button onClick={handleLogout} className="btn-ghost flex items-center gap-2 text-sm"><LogOut size={14} /> Çıkış</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: Home, label: 'Aktif Proje', value: projects.length || '0', color: 'text-primary' },
              { icon: Clock, label: 'Onay Bekleyen', value: '0', color: 'text-amber-500' },
              { icon: CheckCircle, label: 'Tamamlanan', value: '0', color: 'text-green-500' },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-5">
                <s.icon size={18} className={`${s.color} mb-3`} />
                <div className={`font-head text-2xl font-extrabold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {projects.length === 0 ? (
            <div className="bg-white border border-border rounded-xl p-12 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-head font-bold text-lg mb-2">Henüz projeniz yok</h3>
              <p className="text-muted text-sm mb-6">İlk projenizi oluşturun, süreç başlasın.</p>
              <Link href="/proje/yeni" className="btn-primary text-sm">İlk Projeyi Oluştur</Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
