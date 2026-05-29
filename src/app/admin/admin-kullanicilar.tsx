'use client'
import { useState } from 'react'
import { Search, Filter, CheckCircle, XCircle, Eye } from 'lucide-react'

const users = [
  { id: 1, name: 'Mustafa Kaya', email: 'mustafa@gmail.com', type: 'Arsa Sahibi', city: 'Denizli', membership: 'STANDARD', date: '29 May 2026', status: 'active', projects: 1 },
  { id: 2, name: 'Zeynep Arslan', email: 'zeynep@gmail.com', type: 'Mimar', city: 'İzmir', membership: 'FREE', date: '29 May 2026', status: 'pending', projects: 0 },
  { id: 3, name: 'Cem Öztürk', email: 'cem@gmail.com', type: 'Usta', city: 'Bursa', membership: 'BASIC', date: '28 May 2026', status: 'review', projects: 0 },
  { id: 4, name: 'Fatma Şahin', email: 'fatma@gmail.com', type: 'Arsa Sahibi', city: 'Ankara', membership: 'PREMIUM', date: '28 May 2026', status: 'active', projects: 2 },
  { id: 5, name: 'Ali Demir', email: 'ali@gmail.com', type: 'Elektrikçi', city: 'İstanbul', membership: 'BASIC', date: '27 May 2026', status: 'active', projects: 0 },
]

export default function KullanicilarPage() {
  const [search, setSearch] = useState('')
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-2xl font-extrabold">Kullanıcılar</h1>
          <p className="text-muted text-sm mt-0.5">Toplam {users.length} kullanıcı</p>
        </div>
      </div>

      {/* Arama */}
      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="İsim veya e-posta ara..."
            className="input pl-9"
          />
        </div>
        <button className="btn-ghost flex items-center gap-2 text-sm">
          <Filter size={14} /> Filtrele
        </button>
      </div>

      {/* Tablo */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-surface border-b border-border">
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Kullanıcı</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Tip</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Şehir</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Üyelik</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Proje</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Durum</th>
              <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-surface transition-colors">
                <td className="px-5 py-3.5">
                  <div className="font-medium text-sm">{u.name}</div>
                  <div className="text-xs text-muted">{u.email}</div>
                </td>
                <td className="px-5 py-3.5 text-sm text-muted">{u.type}</td>
                <td className="px-5 py-3.5 text-sm text-muted">{u.city}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    u.membership === 'PREMIUM' ? 'bg-purple-100 text-purple-700' :
                    u.membership === 'STANDARD' ? 'bg-blue-100 text-blue-700' :
                    u.membership === 'BASIC' ? 'bg-gray-100 text-gray-600' :
                    'bg-surface text-muted'
                  }`}>
                    {u.membership}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-sm text-center">{u.projects}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    u.status === 'active' ? 'bg-green-100 text-green-700' :
                    u.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {u.status === 'active' ? 'Aktif' : u.status === 'pending' ? 'Bekliyor' : 'İnceleniyor'}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:text-primary transition-colors"><Eye size={14} /></button>
                    <button className="p-1 hover:text-green-500 transition-colors"><CheckCircle size={14} /></button>
                    <button className="p-1 hover:text-red-500 transition-colors"><XCircle size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
