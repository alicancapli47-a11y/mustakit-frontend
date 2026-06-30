'use client'
import { useState } from 'react'

const packages = {
  minimal: { name: 'Minimalist Paket', price: 1500, label: '1.500 TL' },
  standart: { name: 'Standart Paket', price: 2000, label: '2.000 TL' },
}

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<'minimal' | 'standart'>('minimal')
  const [paymentMethod, setPaymentMethod] = useState<'lemonsqueezy' | 'shopier'>('lemonsqueezy')
  const [contractAccepted, setContractAccepted] = useState(false)
  const [contractModalOpen, setContractModalOpen] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [krokiFiles, setKrokiFiles] = useState<File[]>([])

  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', city: '', district: '',
    projectName: '', area: '', maps_link: '', description: '', highlights: '',
    drone_link: '', notes: '',
  })

  const cities = ['Adana','Ankara','Antalya','Aydın','Balıkesir','Bursa','Denizli','Diyarbakır','Eskişehir','İstanbul','İzmir','Kocaeli','Konya','Malatya','Mersin','Muğla','Samsun','Trabzon','Van','Diğer']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contractAccepted) {
      alert("Lütfen Hizmet Sözleşmesi ve KVKK Aydınlatma Metni'ni onaylayın.")
      return
    }
    setLoading(true)
    const pkg = packages[selectedPackage]
    const data = {
      ...form,
      files: uploadedFiles.map(f => f.name).join(', '),
      krokiFiles: krokiFiles.map(f => f.name).join(', '),
      packageName: pkg.name,
      packagePrice: pkg.label,
      packageType: selectedPackage,
      paymentMethod,
      serviceType: 'tr_studio_' + selectedPackage,
      source: 'mustakit.com',
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/studio/order-tr`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      setLoading(false)

      if (paymentMethod === 'shopier') {
        const shopierUrl = selectedPackage === 'standart'
          ? 'https://www.shopier.com/Mustakit/47021980'
          : 'https://www.shopier.com/Mustakit/46435148'
        setPaymentUrl(shopierUrl)
        setPaymentModalOpen(true)
      } else if (result.checkoutUrl) {
        setPaymentUrl(result.checkoutUrl)
        setPaymentModalOpen(true)
      } else {
        throw new Error(result.error || 'Hata oluştu')
      }
    } catch (err) {
      console.error(err)
      setLoading(false)
      alert('Bir hata oluştu. Lütfen tekrar deneyin veya tvarzmedya@gmail.com adresine yazın.')
    }
  }

  const handlePaymentClick = () => {
    setTimeout(() => {
      setPaymentModalOpen(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <main style={{ fontFamily: "Inter, sans-serif", background: "#F7F4F1", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ background: "white", borderRadius: 24, padding: 48, maxWidth: 480, textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🎬</div>
          <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Siparişiniz alındı!</h2>
          <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7, marginBottom: 20 }}>
            Form bilgileriniz ekibimize iletildi. Ödemeniz tamamlandıktan sonra 1-2 iş günü içinde videonuz e-posta adresinize gönderilecektir.
          </p>
          <a href="/" style={{ display: "inline-block", background: "#F26419", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 13 }}>
            Ana Sayfaya Dön
          </a>
        </div>
      </main>
    )
  }

  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419" }}>
            Müstakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </span>
          <span style={{ background: "#F26419", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
            Profesyonel Video
          </span>
        </div>
      </nav>

      {/* HERO with video */}
      <div style={{ position: "relative", color: "white", padding: "70px 24px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", zIndex: 0 }} />
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, zIndex: 1 }}>
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,26,26,0.7) 0%, rgba(45,31,14,0.7) 100%)", zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3 }}>
          <div style={{ display: "inline-block", background: "rgba(242,100,25,0.2)", border: "1px solid rgba(242,100,25,0.5)", color: "#F26419", fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
            🏞️ Arsa &amp; Yapı Projesi Videosu
          </div>
          <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(26px, 4.5vw, 42px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: -1, marginBottom: 16 }}>
            Arsanız veya projeniz için <span style={{ color: "#F26419" }}>profesyonel</span><br />tanıtım videosu
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Bilgilerinizi doldurun, paketinizi seçin, ödemenizi yapın. 1-2 iş günü içinde videonuz hazır.
          </p>
        </div>
      </div>

      {/* PACKAGES */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10, textAlign: "center" }}>Paketler</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 36, textAlign: "center" }}>İhtiyacınıza Uygun Paket Seçin</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ border: "2px solid #E0D9D0", borderRadius: 20, overflow: "hidden", background: "white", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: 24, borderBottom: "1px solid #E0D9D0" }}>
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>Minimalist Paket</div>
                <div style={{ fontSize: 12, color: "#777", marginBottom: 16, lineHeight: 1.5 }}>30 saniyelik sade arsa &amp; yapı projesi videosu</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 30, fontWeight: 800, color: "#F26419" }}>1.500 TL</div>
              </div>
              <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, flex: 1 }}>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ 30 saniyelik video</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Müzikli kurgu</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Yazı ve grafikle anlatım</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Gerçekçi animasyon</li>
                  <li style={{ fontSize: 13, color: "#c44" }}>✕ Seslendirme yok</li>
                  <li style={{ fontSize: 13, color: "#c44" }}>✕ Drone &amp; yapı yerleştirme yok</li>
                </ul>
                <button type="button" onClick={() => setSelectedPackage('minimal')}
                  style={{ width: "100%", background: selectedPackage === 'minimal' ? "#F26419" : "#F7F4F1", color: selectedPackage === 'minimal' ? "white" : "#1A1A1A", border: selectedPackage === 'minimal' ? "1px solid #F26419" : "1px solid #E0D9D0", fontWeight: 700, padding: 12, borderRadius: 10, cursor: "pointer", fontSize: 14 }}>
                  Bu Paketi Seç
                </button>
              </div>
            </div>

            <div style={{ border: "2px solid #F26419", borderRadius: 20, overflow: "hidden", background: "white", display: "flex", flexDirection: "column", position: "relative" }}>
              <div style={{ position: "absolute", top: -1, right: 16, background: "#F26419", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: "0 0 8px 8px" }}>En Popüler</div>
              <div style={{ padding: 24, borderBottom: "1px solid #E0D9D0" }}>
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>Standart Paket</div>
                <div style={{ fontSize: 12, color: "#777", marginBottom: 16, lineHeight: 1.5 }}>Seslendirmeli, gerçekçi animasyon ve drone görüntülü tam prodüksiyon</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 30, fontWeight: 800, color: "#F26419" }}>2.000 TL</span>
                  <span style={{ fontSize: 15, color: "#777", textDecoration: "line-through" }}>2.500 TL</span>
                </div>
              </div>
              <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, flex: 1 }}>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ 30-60 saniye arası video</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Gerçekçi seslendirme ile detaylı anlatım</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Müzikli kurgu</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Gerçekçi drone footage (arsa ve yapı)</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Gerçekçi animasyonlar</li>
                  <li style={{ fontSize: 13, color: "#333" }}>✓ Yazı ve grafikle anlatım</li>
                </ul>
                <button type="button" onClick={() => setSelectedPackage('standart')}
                  style={{ width: "100%", background: selectedPackage === 'standart' ? "#F26419" : "#F7F4F1", color: selectedPackage === 'standart' ? "white" : "#1A1A1A", border: selectedPackage === 'standart' ? "1px solid #F26419" : "1px solid #E0D9D0", fontWeight: 700, padding: 12, borderRadius: 10, cursor: "pointer", fontSize: 14 }}>
                  Bu Paketi Seç
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#F7F4F1", padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10, textAlign: "center" }}>Nasıl Çalışır</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 36, textAlign: "center" }}>3 adımda videonuz hazır</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
            <div style={{ background: "white", border: "1px solid #E0D9D0", borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 34, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 12 }}>01</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Paket Seçin</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>Minimalist veya Standart paketten size uygun olanı seçin.</div>
            </div>
            <div style={{ background: "white", border: "1px solid #E0D9D0", borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 34, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 12 }}>02</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Formu Doldurup Ödeyin</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>Bilgilerinizi girin, ödeme yönteminizi seçin ve tamamlayın.</div>
            </div>
            <div style={{ background: "white", border: "1px solid #E0D9D0", borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 34, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 12 }}>03</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Videonuzu Alın</div>
              <div style={{ fontSize: 12, color: "#777", lineHeight: 1.5 }}>1-2 iş günü içinde videonuz e-posta adresinize teslim edilir.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ background: "#F7F4F1", padding: "64px 24px" }} id="siparis-formu">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ background: "white", border: "1px solid #E0D9D0", borderRadius: 24, padding: 40 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Sipariş Formu</h2>
            <p style={{ fontSize: 13, color: "#777", marginBottom: 32 }}>Aşağıdaki formu doldurun. Ödeme tamamlandıktan sonra 1-2 iş günü içinde videonuz hazırlanır.</p>

            <div style={{ background: "#fff8f5", border: "1px solid rgba(242,100,25,0.3)", borderRadius: 12, padding: 16, marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 13 }}>Seçili paket: <b style={{ color: "#F26419" }}>{packages[selectedPackage].name}</b></div>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 22, fontWeight: 800, color: "#F26419" }}>{packages[selectedPackage].label}</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>👤 İletişim Bilgileri</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Ad Soyad *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Ahmet Yılmaz"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Firma / Unvan</label>
                  <input value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="ABC Emlak"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>E-posta *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="ahmet@email.com"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Telefon *</label>
                  <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="0555 000 00 00"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
              </div>

              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>📍 Proje Bilgileri</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>İl *</label>
                  <select required value={form.city} onChange={e => setForm({...form, city: e.target.value})}
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }}>
                    <option value="">Seçin</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>İlçe *</label>
                  <input required value={form.district} onChange={e => setForm({...form, district: e.target.value})} placeholder="İlçe adı"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Proje / Arsa Adı</label>
                  <input value={form.projectName} onChange={e => setForm({...form, projectName: e.target.value})} placeholder="örn: Yeşil Vadi Konutları"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Alan (m²)</label>
                  <input value={form.area} onChange={e => setForm({...form, area: e.target.value})} placeholder="örn: 500"
                    style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Google Maps Linki</label>
                <input type="url" value={form.maps_link} onChange={e => setForm({...form, maps_link: e.target.value})} placeholder="https://maps.google.com/..."
                  style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
              </div>

              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>✨ Detaylar</div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Projeyi / Arsayı Anlatın *</label>
                <textarea required value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                  placeholder="Öne çıkan özellikleri, konumu, yatırım avantajlarını anlatın." rows={5}
                  style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14, resize: "vertical" }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Videoda Vurgulanmasını İstediğiniz Noktalar</label>
                <textarea value={form.highlights} onChange={e => setForm({...form, highlights: e.target.value})}
                  placeholder="örn: Yol genişletme projesi planlanıyor, merkeze yakınlık..." rows={3}
                  style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14, resize: "vertical" }} />
              </div>

              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>📐 Kroki / Plan (varsa)</div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="krokiInput" style={{ display: "block", border: "2px dashed #E0D9D0", borderRadius: 12, padding: 28, textAlign: "center", cursor: "pointer", background: "#F7F4F1" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>📐</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Kroki, mimari plan veya teknik çizim yüklemek için tıklayın</div>
                  <div style={{ fontSize: 11, color: "#777" }}>PDF, JPG, PNG, DWG formatları</div>
                </label>
                <input id="krokiInput" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.dwg" style={{ display: "none" }}
                  onChange={e => setKrokiFiles(prev => [...prev, ...Array.from(e.target.files || [])])} />
                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {krokiFiles.map((f, i) => (
                    <div key={i} style={{ background: "rgba(242,100,25,0.1)", border: "1px solid rgba(242,100,25,0.3)", color: "#F26419", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6 }}>📐 {f.name}</div>
                  ))}
                </div>
              </div>

              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>📸 Fotoğraf ve Medya</div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="photoInput" style={{ display: "block", border: "2px dashed #E0D9D0", borderRadius: 12, padding: 28, textAlign: "center", cursor: "pointer", background: "#F7F4F1" }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🖼️</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Fotoğraf yüklemek için tıklayın</div>
                  <div style={{ fontSize: 11, color: "#777" }}>JPG, PNG formatları · Birden fazla seçilebilir</div>
                </label>
                <input id="photoInput" type="file" multiple accept="image/*" style={{ display: "none" }}
                  onChange={e => setUploadedFiles(prev => [...prev, ...Array.from(e.target.files || [])])} />
                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {uploadedFiles.map((f, i) => (
                    <div key={i} style={{ background: "rgba(242,100,25,0.1)", border: "1px solid rgba(242,100,25,0.3)", color: "#F26419", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6 }}>📎 {f.name}</div>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Drone Video Linki (varsa)</label>
                <input type="url" value={form.drone_link} onChange={e => setForm({...form, drone_link: e.target.value})} placeholder="YouTube, Google Drive veya benzeri link"
                  style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14 }} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#555", marginBottom: 6 }}>Ek Notlar</label>
                <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Eklemek istediğiniz başka bir şey var mı?" rows={2}
                  style={{ width: "100%", border: "1px solid #E0D9D0", borderRadius: 10, padding: "10px 14px", fontSize: 14, resize: "vertical" }} />
              </div>

              {/* SÖZLEŞME */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#fff8f5", border: "1px solid rgba(242,100,25,0.2)", borderRadius: 10, padding: 16, marginBottom: 20 }}>
                <input type="checkbox" checked={contractAccepted} onChange={e => setContractAccepted(e.target.checked)}
                  style={{ width: "auto", marginTop: 3, accentColor: "#F26419" }} />
                <label style={{ fontSize: 12, fontWeight: 400, color: "#333", cursor: "pointer", margin: 0 }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setContractModalOpen(true) }} style={{ color: "#F26419", fontWeight: 600, textDecoration: "underline" }}>
                    Hizmet Sözleşmesi ve KVKK Aydınlatma Metni
                  </a>'ni okudum, kabul ediyorum. <span style={{ color: "#e53e3e" }}>*</span>
                </label>
              </div>

              {/* ÖDEME YÖNTEMİ */}
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 15, color: "#F26419", paddingBottom: 8, borderBottom: "2px solid #F26419", margin: "28px 0 18px" }}>💳 Ödeme Yöntemi Seçin</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 12, border: paymentMethod === 'lemonsqueezy' ? "2px solid #F26419" : "2px solid #E0D9D0", background: paymentMethod === 'lemonsqueezy' ? "rgba(242,100,25,0.04)" : "white", borderRadius: 12, padding: 16, cursor: "pointer" }}>
                  <input type="radio" name="paymentMethod" checked={paymentMethod === 'lemonsqueezy'} onChange={() => setPaymentMethod('lemonsqueezy')}
                    style={{ width: 18, height: 18, accentColor: "#F26419" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>Kredi/Banka Kartı ile Öde</div>
                    <div style={{ fontSize: 11, color: "#777", marginTop: 2 }}>Güvenli ödeme altyapısı üzerinden anında ödeme</div>
                  </div>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: 12, border: paymentMethod === 'shopier' ? "2px solid #F26419" : "2px solid #E0D9D0", background: paymentMethod === 'shopier' ? "rgba(242,100,25,0.04)" : "white", borderRadius: 12, padding: 16, cursor: "pointer" }}>
                  <input type="radio" name="paymentMethod" checked={paymentMethod === 'shopier'} onChange={() => setPaymentMethod('shopier')}
                    style={{ width: 18, height: 18, accentColor: "#F26419" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>Shopier ile Öde</div>
                    <div style={{ fontSize: 11, color: "#777", marginTop: 2 }}>Shopier güvenli ödeme sayfasına yönlendirilirsiniz</div>
                  </div>
                </label>
              </div>

              <div style={{ background: "#fff8f5", border: "1px solid rgba(242,100,25,0.2)", borderRadius: 10, padding: "14px 16px", fontSize: 12, color: "#7a3a10", marginBottom: 20, lineHeight: 1.6 }}>
                💳 Tek seferlik tam ödeme alınır, ön ödeme yoktur. Ödeme tamamlandıktan sonra videonuz 1-2 iş günü içinde e-posta adresinize teslim edilir.
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <button type="submit" disabled={loading}
                  style={{ width: "100%", background: "#F26419", color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 15, fontWeight: 700, padding: 16, borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}>
                  {loading ? 'Gönderiliyor...' : 'Ödemeye Geç →'}
                </button>
                <div style={{ fontSize: 11, color: "#777" }}>🔒 Güvenli ödeme · Bilgileriniz korunur</div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10, textAlign: "center" }}>Sık Sorulan Sorular</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 36, textAlign: "center" }}>Aklınızdaki Sorular</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680, margin: "0 auto" }}>
            {[
              ['İki paket arasındaki fark ne?', 'Minimalist paket sade, seslendirmesiz bir video sunar. Standart paket ise profesyonel seslendirme, projenizin gerçekçi animasyonu ve drone görüntüleriyle tam prodüksiyon sunar.'],
              ['Video ne kadar sürede teslim edilir?', 'Ödemeniz ve form bilgileriniz alındıktan sonra 1-2 iş günü içinde videonuz hazırlanır ve e-posta adresinize gönderilir.'],
              ['Ön ödeme var mı?', 'Hayır, tek seferlik tam ödeme alınır. Ön ödeme veya kalan ödeme yoktur.'],
              ['Hangi ödeme yöntemlerini kullanabilirim?', 'Kredi/banka kartı ile güvenli ödeme altyapımız üzerinden veya Shopier üzerinden ödeme yapabilirsiniz.'],
              ['Revizyon hakkım var mı?', 'Her iki pakette de 1 revizyon hakkınız bulunmaktadır.'],
            ].map(([q, a]) => (
              <details key={q} style={{ border: "1px solid #E0D9D0", borderRadius: 12, overflow: "hidden" }}>
                <summary style={{ padding: "16px 18px", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>{q}</summary>
                <p style={{ padding: "0 18px 16px", fontSize: 12, color: "#777", lineHeight: 1.7 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: 24, fontSize: 12 }}>
        <p>© 2025 Müstakit · Müstakil evinizi yaptırmanın en şeffaf yolu</p>
        <p style={{ marginTop: 6 }}>Arsa &amp; Yapı Projesi Video Servisi</p>
      </footer>

      {/* SÖZLEŞME MODAL */}
      {contractModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "white", borderRadius: 20, padding: 36, maxWidth: 600, width: "100%", textAlign: "left", maxHeight: "80vh", overflowY: "auto" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Müstakit Studio Hizmet Sözleşmesi</h3>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.8 }}>
              <p style={{ marginBottom: 12 }}><strong>1. TARAFLAR</strong><br />Bu sözleşme, "Müstakit Studio" (Hizmet Sağlayıcı) ile formu dolduran ve ödeme yapan kişi/kurum (Müşteri) arasında akdedilmiştir.</p>
              <p style={{ marginBottom: 12 }}><strong>2. HİZMETİN KAPSAMI</strong><br />Hizmet Sağlayıcı, Müşteri tarafından sağlanan bilgi, fotoğraf, kroki ve/veya plan dokümanlarını kullanarak profesyonel tanıtım videosu hazırlar.</p>
              <p style={{ marginBottom: 12 }}><strong>3. TESLİMAT SÜRESİ</strong><br />Ödeme onayının alınmasından itibaren video, 1-2 iş günü içinde teslim edilir. Mücbir sebepler süreyi uzatabilir.</p>
              <p style={{ marginBottom: 12 }}><strong>4. ÖDEME KOŞULLARI</strong><br />Hizmet bedeli, sipariş anında tek seferde tahsil edilir. Ön ödeme veya kısmi ödeme uygulanmaz.</p>
              <p style={{ marginBottom: 12 }}><strong>5. İPTAL VE İADE</strong><br />Ödeme yapıldıktan sonra üretim süreci başlar. Üretimi tamamlanmış işler için iade yapılmaz.</p>
              <p style={{ marginBottom: 12 }}><strong>6. REVİZYON HAKKI</strong><br />Her sipariş kapsamında 1 revizyon hakkı tanınır. Talepler teslim tarihinden itibaren 7 gün içinde iletilmelidir.</p>
              <p style={{ marginBottom: 12 }}><strong>7. TELİF VE KULLANIM HAKLARI</strong><br />Teslim edilen video, Müşteri'nin ticari ve kişisel kullanımı için tam kullanım hakkı ile teslim edilir.</p>
              <p style={{ marginBottom: 12 }}><strong>8. KİŞİSEL VERİLERİN KORUNMASI (KVKK)</strong><br />Paylaşılan bilgiler, 6698 sayılı KVKK kapsamında yalnızca hizmetin ifası amacıyla işlenir ve üçüncü kişilerle paylaşılmaz.</p>
              <p style={{ marginBottom: 12 }}><strong>9. SORUMLULUK SINIRI</strong><br />Hizmet Sağlayıcı, Müşteri tarafından sağlanan bilgi ve görsellerin doğruluğundan sorumlu değildir.</p>
              <p style={{ marginBottom: 12 }}><strong>10. UYUŞMAZLIKLARIN ÇÖZÜMÜ</strong><br />Bu sözleşmeden doğacak uyuşmazlıklarda Türkiye Cumhuriyeti yasaları yetkilidir.</p>
            </div>
            <button onClick={() => setContractModalOpen(false)}
              style={{ width: "100%", marginTop: 16, background: "none", border: "1px solid #E0D9D0", color: "#1A1A1A", fontSize: 13, fontWeight: 600, padding: 11, borderRadius: 10, cursor: "pointer" }}>
              Kapat
            </button>
          </div>
        </div>
      )}

      {/* ÖDEME MODAL */}
      {paymentModalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ background: "white", borderRadius: 20, padding: 36, maxWidth: 480, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 14 }}>{paymentMethod === 'shopier' ? '🛍️' : '💳'}</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{paymentMethod === 'shopier' ? 'Shopier ile Ödeme' : 'Kart ile Ödeme'}</h3>
            <p style={{ fontSize: 13, color: "#777", marginBottom: 20, lineHeight: 1.6 }}>Formunuz alındı. Aşağıdaki butona tıklayarak ödemenizi tamamlayın.</p>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setPaymentModalOpen(false)}
                style={{ flex: 1, background: "none", border: "1px solid #E0D9D0", color: "#1A1A1A", fontSize: 13, fontWeight: 600, padding: 11, borderRadius: 10, cursor: "pointer" }}>
                İptal
              </button>
              <a href={paymentUrl} target="_blank" rel="noreferrer" onClick={handlePaymentClick}
                style={{ flex: 2, background: "#F26419", color: "white", border: "none", fontSize: 13, fontWeight: 700, padding: 11, borderRadius: 10, cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Ödemeye Git →
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
