'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Eye, Loader2, AlertCircle } from 'lucide-react'

export default function OnaylarPage() {
  const [professionals, setProfessionals] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPending()
  }, [])

  const fetchPending = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/pending`, {
        headers: { 'x-admin-key': 'mustakit_admin_2025' }
      })
      const data = await res.json()
      setProfessionals(data.professionals || [])
      setProjects(data.documents || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  const approvePro = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/professionals/${id}/verify`, {
      method: 'PATCH',
      headers: { 'x-admin-key': 'mustakit_admin_2025' }
    })
    fetchPending()
  }

  if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="animate-spin text-primary" size={32} /></div>

  const total = professionals.length + projects.length

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-head text-2xl font-extrabold">Onay Bekleyenler</h1>
        <p className="text-muted text-sm mt-0.5">{total} başvuru inceleme bekliyor</p>
      </div>

      {total === 0 ? (
        <div className="bg-white border border-border rounded-xl p-12 text-center">
          <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="font-head font-bold text-lg mb-2">Tüm onaylar tamamlandı!</h3>
          <p className="text-muted text-sm">Bekleyen başvuru yok.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Uzman başvuruları */}
          {professionals.length > 0 && (
            <div>
              <h2 className="font-head font-bold text-base mb-3">👷 Uzman Başvuruları ({professionals.length})</h2>
              {professionals.map((p: any) => (
                <div key={p.id} className="bg-white border border-border rounded-xl p-6 mb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-surface2 flex items-center justify-center font-bold text-gray-600">
                        {p.user?.name?.[0] || '?'}
                      </div>
                      <div>
                        <div className="font-semibold">{p.user?.name}</div>
                        <div className="text-sm text-muted">{p.user?.email}</div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.type}</span>
                          <span className="text-xs text-muted">{p.city}</span>
                        </div>
                        {p.bio && <p className="text-xs text-gray-600 mt-2 max-w-md">{p.bio}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => approvePro(p.id)} className="flex items-center gap-1.5 text-sm font-medium text-white bg-green-500 px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors">
                        <CheckCircle size={14} /> Onayla
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Proje belgeleri */}
          {projects.length > 0 && (
            <div>
              <h2 className="font-head font-bold text-base mb-3">📄 Belge Onayları ({projects.length})</h2>
              {projects.map((d: any) => (
                <div key={d.id} className="bg-white border border-border rounded-xl p-6 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm">{d.project?.name} — {d.project?.user?.name}</div>
                      <div className="text-xs text-muted mt-1">Belge tipi: {d.type}</div>
                    </div>
                    <div className="flex gap-2">
                      <a href={d.url} target="_blank" className="flex items-center gap-1 text-xs text-primary border border-primary/20 px-2 py-1 rounded hover:bg-primary/5"><Eye size={12} /> Görüntüle</a>
                      <button className="flex items-center gap-1 text-xs text-white bg-green-500 px-2 py-1 rounded hover:bg-green-600"><CheckCircle size={12} /> Onayla</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
