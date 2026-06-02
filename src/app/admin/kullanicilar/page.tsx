'use client'
import { useState, useEffect } from 'react'
import { Search, Loader2, RefreshCw } from 'lucide-react'

export default function KullanicilarPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(0)

  const API = process.env.NEXT_PUBLIC_API_URL

  const fetchUsers = async (q = '') => {
    setLoading(true)
    try {
      const url = `${API}/admin/users?limit=50${q ? '&search=' + encodeURIComponent(q) : ''}`
      const res = await fetch(url, { headers: { 'x-admin-key': 'mustakit_admin_2025' } })
      const data = await res.json()
      setUsers(data.users || [])
      setTotal(data.total || 0)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchUsers() }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-2xl font-extrabold">Kullanıcılar</h1>
          <p className="text-muted text-sm mt-0.5">Toplam {total} kullanıcı</p>
        </div>
        <button onClick={() => fetchUsers(search)} className="btn-ghost flex items-center gap-2 text-sm">
          <RefreshCw size={14} /> Yenile
        </button>
      </div>

      <div className="flex gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && fetchUsers(search)}
            placeholder="İsim veya e-posta ara..." className="input pl-9" />
        </div>
        <button onClick={() => fetchUsers(search)} className="btn-primary text-sm">Ara</button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      ) : (
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-surface border-b border-border">
                <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Kullanıcı</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Tip</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Şehir</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Kayıt</th>
                <th className="text-left px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((u: any) => (
                <tr key={u.id} className="hover:bg-surface transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-sm">{u.name || '—'}</div>
                    <div className="text-xs text-muted">{u.email}</div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-semibold bg-surface px-2 py-0.5 rounded-full">
                      {u.userType || u.role || 'USER'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-muted">{u.city || '—'}</td>
                  <td className="px-5 py-3.5 text-xs text-muted">
                    {new Date(u.createdAt).toLocaleDateString('tr-TR')}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${u.emailVerified ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {u.emailVerified ? 'Onaylı' : 'Bekliyor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <div className="text-center py-12 text-muted text-sm">Kullanıcı bulunamadı</div>
          )}
        </div>
      )}
    </div>
  )
}
