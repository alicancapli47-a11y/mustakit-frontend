'use client'
import { useState } from 'react'
import { CheckCircle, XCircle, Eye } from 'lucide-react'

const pending = [
  { id: 1, name: 'Zeynep Arslan', email: 'zeynep@gmail.com', type: 'Mimar', city: 'İzmir', applied: '29 May 2026', docs: ['Diploma', 'Kimlik'] },
  { id: 2, name: 'Cem Öztürk', email: 'cem@gmail.com', type: 'Temel Ustası', city: 'Bursa', applied: '28 May 2026', docs: ['Kimlik', 'Referans'] },
  { id: 3, name: 'Hürriyet Yapı', email: 'info@hurriyet.com', type: 'Malzemeci', city: 'Ankara', applied: '27 May 2026', docs: ['Vergi Levhası', 'Kimlik'] },
]

export default function OnaylarPage() {
  const [items, setItems] = useState(pending)

  const approve = (id: number) => setItems(prev => prev.filter(p => p.id !== id))
  const reject = (id: number) => setItems(prev => prev.filter(p => p.id !== id))

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-head text-2xl font-extrabold">Onay Bekleyenler</h1>
        <p className="text-muted text-sm mt-0.5">{items.length} başvuru inceleme bekliyor</p>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-12 text-center">
          <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="font-head font-bold text-lg mb-2">Tüm onaylar tamamlandı!</h3>
          <p className="text-muted text-sm">Bekleyen başvuru yok.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((p) => (
            <div key={p.id} className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-surface2 flex items-center justify-center font-bold text-gray-600">
                    {p.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-muted">{p.email}</div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.type}</span>
                      <span className="text-xs text-muted">{p.city}</span>
                      <span className="text-xs text-muted">Başvuru: {p.applied}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {p.docs.map((d, i) => (
                        <button key={i} className="flex items-center gap-1 text-xs text-primary border border-primary/20 bg-primary/5 px-2 py-1 rounded hover:bg-primary/10 transition-colors">
                          <Eye size={10} /> {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => reject(p.id)}
                    className="flex items-center gap-1.5 text-sm font-medium text-red-500 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <XCircle size={14} /> Reddet
                  </button>
                  <button
                    onClick={() => approve(p.id)}
                    className="flex items-center gap-1.5 text-sm font-medium text-white bg-green-500 px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <CheckCircle size={14} /> Onayla
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
