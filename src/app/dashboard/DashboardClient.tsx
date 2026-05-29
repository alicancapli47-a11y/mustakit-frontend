'use client'
import Link from 'next/link'
import { Plus, Home, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const mockProjects = [
  {
    id: 1,
    name: 'Denizli / Acıpayam — 120m²',
    stage: 'Temel',
    progress: 40,
    budget: '2.400.000',
    status: 'active',
    nextAction: 'Duvar ustanı çağırma zamanı',
  },
]

const stages = ['Ruhsat', 'Kazı', 'Temel', 'Duvar', 'Çatı', 'Tesisat', 'İnce İşler', 'Teslim']

export function DashboardClient({ user }: { user: any }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-head text-2xl font-extrabold">
              Merhaba, {user?.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-muted text-sm mt-1">Projelerinizi buradan takip edebilirsiniz.</p>
          </div>
          <Link
            href="/proje/yeni"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Plus size={16} />
            Yeni Proje
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Home, label: 'Aktif Proje', value: '1', color: 'text-primary' },
            { icon: Clock, label: 'Bekleyen Onay', value: '2', color: 'text-amber-500' },
            { icon: CheckCircle, label: 'Tamamlanan', value: '0', color: 'text-success' },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-5">
              <stat.icon size={18} className={`${stat.color} mb-3`} />
              <div className={`font-head text-2xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* AI Uyarı */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 mb-6">
          <AlertCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-semibold text-amber-800">AI Asistan Uyarısı</div>
            <div className="text-xs text-amber-700 mt-0.5">
              Denizli projenizde temel aşaması tamamlandı. Duvar ustanıza ulaşma zamanı geldi.
            </div>
          </div>
        </div>

        {/* Projects */}
        <h2 className="font-head font-bold text-lg mb-4">Projelerim</h2>
        {mockProjects.length > 0 ? (
          <div className="flex flex-col gap-4">
            {mockProjects.map((project) => (
              <div key={project.id} className="bg-white border border-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <div className="text-xs text-muted mt-0.5">Bütçe: {project.budget} TL</div>
                  </div>
                  <span className="badge bg-primary/10 text-primary">
                    {project.stage} Aşaması
                  </span>
                </div>

                {/* Stage progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span>İlerleme</span>
                    <span>%{project.progress}</span>
                  </div>
                  <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Stages */}
                <div className="grid grid-cols-8 gap-1 mb-4">
                  {stages.map((s, i) => {
                    const stageIndex = stages.indexOf(project.stage)
                    const done = i < stageIndex
                    const active = i === stageIndex
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-6 h-6 rounded-full mx-auto mb-1 flex items-center justify-center text-xs font-bold
                          ${done ? 'bg-success text-white' : active ? 'bg-primary text-white' : 'bg-surface2 text-muted'}`}>
                          {done ? '✓' : i + 1}
                        </div>
                        <div className="text-[9px] text-muted leading-tight">{s}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-muted">
                    🤖 {project.nextAction}
                  </div>
                  <Link
                    href={`/proje/${project.id}`}
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    Detay →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-border rounded-xl p-12 text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="font-head font-bold text-lg mb-2">Henüz projeniz yok</h3>
            <p className="text-muted text-sm mb-6">İlk projenizi oluşturun, AI size gerçekçi bir maliyet tahmini çıkarsın.</p>
            <Link href="/proje/yeni" className="btn-primary text-sm">
              İlk Projeyi Oluştur
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
