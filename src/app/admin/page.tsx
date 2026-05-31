'use client'
import { Users, FolderOpen, ShieldCheck, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'

const stats = [
  { label: 'Toplam Kullanıcı', value: '1.284', change: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Aktif Proje', value: '47', change: '+8', icon: FolderOpen, color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Onay Bekleyen', value: '3', change: 'acil', icon: ShieldCheck, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Bu Ay Gelir', value: '84.000 TL', change: '+23%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
]

const recentUsers = [
  { name: 'Mustafa Kaya', email: 'mustafa@gmail.com', type: 'Arsa Sahibi', date: '2 dk önce', status: 'active' },
  { name: 'Zeynep Arslan', email: 'zeynep@gmail.com', type: 'Mimar', date: '15 dk önce', status: 'pending' },
  { name: 'Cem Öztürk', email: 'cem@gmail.com', type: 'Usta', date: '1 saat önce', status: 'review' },
  { name: 'Hürriyet Yapı', email: 'info@hurriyet.com', type: 'Malzemeci', date: '3 saat önce', status: 'pending' },
]

const aiAlerts = [
  { project: 'Kadir Bey — Denizli', type: 'warning', msg: '5 günlük gecikme tespit edildi' },
  { project: 'Fatma Hanım — Bursa', type: 'danger', msg: 'Fiyat anomalisi: piyasanın 2 katı' },
  { project: 'Ali Bey — İzmir', type: 'success', msg: 'Temel aşaması fotoğrafı onaylandı' },
  { project: 'Hasan Bey — Ankara', type: 'success', msg: 'Çatı aşaması tamamlandı' },
]

const escrows = [
  { project: 'Kadir Bey — Denizli 120m²', stage: 'Temel', progress: 40, amount: '480.000 TL', status: 'active' },
  { project: 'Fatma Hanım — Bursa 95m²', stage: 'Duvar', progress: 60, amount: '320.000 TL', status: 'active' },
]

export default function AdminPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-2xl font-extrabold">Dashboard</h1>
          <p className="text-muted text-sm mt-0.5">Hoş geldin — bugün 3 yeni onay bekliyor</p>
        </div>
        <button className="btn-primary text-sm">+ Duyuru Gönder</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-border rounded-xl p-5">
            <div className={`w-9 h-9 ${s.bg} rounded-lg flex items-center justify-center mb-3`}>
              <s.icon size={16} className={s.color} />
            </div>
            <div className="font-head font-extrabold text-2xl mb-0.5">{s.value}</div>
            <div className="text-xs text-muted">{s.label}</div>
            <div className="text-xs text-green-600 font-semibold mt-1">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Son Kullanıcılar */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-head font-bold text-base">Son Kullanıcılar</h2>
            <a href="/admin/kullanicilar" className="text-xs text-primary font-medium hover:underline">Tümü →</a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-surface">
                <th className="text-left px-5 py-2.5 text-xs font-bold text-muted uppercase tracking-wide">Kullanıcı</th>
                <th className="text-left px-5 py-2.5 text-xs font-bold text-muted uppercase tracking-wide">Tip</th>
                <th className="text-left px-5 py-2.5 text-xs font-bold text-muted uppercase tracking-wide">Durum</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((u, i) => (
                <tr key={i} className="border-t border-border hover:bg-surface transition-colors">
                  <td className="px-5 py-3">
                    <div className="font-medium text-sm">{u.name}</div>
                    <div className="text-xs text-muted">{u.date}</div>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted">{u.type}</td>
                  <td className="px-5 py-3">
                    <span className={`badge text-xs px-2 py-0.5 rounded-full font-semibold ${
                      u.status === 'active' ? 'bg-green-100 text-green-700' :
                      u.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {u.status === 'active' ? 'Aktif' : u.status === 'pending' ? 'Bekliyor' : 'İnceleniyor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Uyarılar */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h2 className="font-head font-bold text-base">🤖 AI Uyarıları</h2>
            <span className="text-xs text-muted">Otomatik tespit</span>
          </div>
          <div className="divide-y divide-border">
            {aiAlerts.map((a, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                {a.type === 'success' ? <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" /> :
                 a.type === 'warning' ? <Clock size={16} className="text-amber-500 mt-0.5 shrink-0" /> :
                 <AlertCircle size={16} className="text-red-500 mt-0.5 shrink-0" />}
                <div>
                  <div className="text-xs font-semibold">{a.project}</div>
                  <div className="text-xs text-muted mt-0.5">{a.msg}</div>
                </div>
                <button className="ml-auto text-xs text-primary font-medium shrink-0">İncele</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Escrow */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-head font-bold text-base">🔒 Escrow Takibi</h2>
          <span className="text-xs text-muted font-semibold">Toplam: 800.000 TL beklemede</span>
        </div>
        <div className="divide-y divide-border">
          {escrows.map((e, i) => (
            <div key={i} className="px-5 py-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold text-sm">{e.project}</div>
                  <div className="text-xs text-muted mt-0.5">{e.stage} aşamasında</div>
                </div>
                <div className="font-head font-extrabold text-primary">{e.amount}</div>
              </div>
              <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${e.progress}%` }} />
              </div>
              <div className="text-xs text-muted mt-1">%{e.progress} tamamlandı</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
