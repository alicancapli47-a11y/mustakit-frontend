'use client'
import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Loader2, RefreshCw } from 'lucide-react'

export default function OnaylarPage() {
  const [professionals, setProfessionals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const API = process.env.NEXT_PUBLIC_API_URL

  const fetchPending = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/admin/pending`, {
        headers: { 'x-admin-key': 'mustakit_admin_2025' }
      })
      const data = await res.json()
      setProfessionals(data.professionals || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPending() }, [])

  const approve = async (id: string) => {
    setActionLoading(id)
    try {
      await fetch(`${API}/admin/professionals/${id}/verify`, {
        method: 'PATCH',
        headers: { 'x-admin-key': 'mustakit_admin_2025' }
      })
      setProfessionals(prev => prev.filter(p => p.id !== id))
    } catch (e) { console.error(e) }
    finally { setActionLoading(null) }
  }

  const reject = async (id: string) => {
    setActionLoading(id + '_reject')
    try {
      await fetch(`${API}/admin/professionals/${id}/reject`, {
        method: 'PATCH',
        headers: { 'x-admin-key': 'mustakit_admin_2025' }
      })
      setProfessionals(prev => prev.filter(p => p.id !== id))
    } catch (e) {
      // Endpoint yoksa sadece listeden kaldır
      setProfessionals(prev => prev.filter(p => p.id !== id))
    } finally { setActionLoading(null) }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-head text-2xl font-extrabold">Onay Bekleyenler</h1>
          <p className="text-muted text-sm mt-0.5">{professionals.length} usta/uzman başvurusu inceleme bekliyor</p>
        </div>
        <button onClick={fetchPending} className="btn-ghost flex items-center gap-2 text-sm">
          <RefreshCw size={14} /> Yenile
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      ) : professionals.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-12 text-center">
          <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="font-head font-bold text-lg mb-2">Bekleyen başvuru yok</h3>
          <p className="text-muted text-sm">Tüm başvurular değerlendirildi.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {professionals.map((p: any) => (
            <div key={p.id} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                    {p.user?.name?.[0] || '?'}
                  </div>
                  <div>
                    <div className="font-semibold">{p.user?.name}</div>
                    <div className="text-sm text-muted">{p.user?.email}</div>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.type}</span>
                      <span className="text-xs text-muted">{p.city}</span>
                      {p.priceMin && <span className="text-xs text-muted">{p.priceMin}–{p.priceMax} TL/gün</span>}
                    </div>
                    {p.bio && <p className="text-xs text-gray-600 mt-2 max-w-md">{p.bio}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => reject(p.id)}
                    disabled={actionLoading === p.id + '_reject'}
                    className="flex items-center gap-1.5 text-sm font-medium text-red-500 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-50">
                    <XCircle size={14} /> Reddet
                  </button>
                  <button onClick={() => approve(p.id)}
                    disabled={actionLoading === p.id}
                    className="flex items-center gap-1.5 text-sm font-medium text-white bg-green-500 px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50">
                    {actionLoading === p.id ? <Loader2 size={14} className="animate-spin" /> : <CheckCircle size={14} />}
                    Onayla
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
