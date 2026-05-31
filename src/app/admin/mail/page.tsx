'use client'
import { useState } from 'react'
import { Send, Users, CheckCircle } from 'lucide-react'

const history = [
  { subject: 'Müstakit\'e Hoş Geldiniz!', sentTo: 1284, date: '28 May 2026', status: 'sent' },
  { subject: 'Yeni Özellik: AI Fotoğraf Denetimi', sentTo: 890, date: '20 May 2026', status: 'sent' },
  { subject: 'Mayıs Kampanyası — %50 İndirim', sentTo: 1100, date: '1 May 2026', status: 'sent' },
]

export default function MailPage() {
  const [form, setForm] = useState({ subject: '', body: '', filter: 'all' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSend = async () => {
    if (!form.subject || !form.body) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ subject: '', body: '', filter: 'all' })
  }

  const recipientCount = form.filter === 'all' ? 1284 : form.filter === 'professionals' ? 320 : 47

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-head text-2xl font-extrabold">Toplu Mail</h1>
        <p className="text-muted text-sm mt-0.5">Tüm kullanıcılara veya belirli gruplara mail gönder</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Mail Formu */}
        <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6">
          <h2 className="font-head font-bold text-base mb-5">Yeni Mail</h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Alıcı Grubu</label>
              <select
                value={form.filter}
                onChange={e => setForm({ ...form, filter: e.target.value })}
                className="input"
              >
                <option value="all">Tüm Kullanıcılar (1.284)</option>
                <option value="professionals">Sadece Uzmanlar (320)</option>
                <option value="premium">Premium Üyeler (47)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Konu</label>
              <input
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                placeholder="Mail konusu..."
                className="input"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1.5 block">İçerik</label>
              <textarea
                value={form.body}
                onChange={e => setForm({ ...form, body: e.target.value })}
                placeholder="Mail içeriği... HTML desteklenir."
                className="input h-40 resize-none font-mono text-xs"
              />
            </div>

            {/* Önizleme */}
            {form.body && (
              <div className="border border-border rounded-lg p-4 bg-surface">
                <div className="text-xs font-semibold text-muted mb-2 uppercase tracking-wide">Önizleme</div>
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: form.body }} />
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Users size={14} />
                <span><strong className="text-gray-700">{recipientCount.toLocaleString('tr-TR')}</strong> alıcıya gönderilecek</span>
              </div>
              <button
                onClick={handleSend}
                disabled={!form.subject || !form.body || sending}
                className="btn-primary flex items-center gap-2 text-sm disabled:opacity-50"
              >
                {sent ? <CheckCircle size={14} /> : <Send size={14} />}
                {sending ? 'Gönderiliyor...' : sent ? 'Gönderildi!' : 'Gönder'}
              </button>
            </div>
          </div>
        </div>

        {/* Geçmiş */}
        <div className="bg-white border border-border rounded-xl overflow-hidden h-fit">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-head font-bold text-base">Gönderim Geçmişi</h2>
          </div>
          <div className="divide-y divide-border">
            {history.map((h, i) => (
              <div key={i} className="px-5 py-4">
                <div className="font-medium text-sm mb-1">{h.subject}</div>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{h.sentTo.toLocaleString('tr-TR')} alıcı</span>
                  <span>{h.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
