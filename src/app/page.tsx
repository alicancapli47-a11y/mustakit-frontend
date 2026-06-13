import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Müstakit Studio — Arsanız İçin Profesyonel Tanıtım Videosu',
  description: 'Emlakçılar ve arsa sahipleri için profesyonel tanıtım videosu. 1-2 iş günü teslim. 2.500 TL sabit fiyat.',
  keywords: 'arsa tanıtım videosu, emlak videosu, arsa videosu, müstakit studio',
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#fff', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ borderBottom: '1px solid #E0D9D0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 20, color: '#F26419' }}>
            Müstakit <span style={{ color: '#1a1a1a', fontWeight: 400, fontSize: 14 }}>Studio</span>
          </span>
          <span style={{ background: '#F26419', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>
            Profesyonel Video
          </span>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)', color: 'white', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(242,100,25,0.2)', border: '1px solid rgba(242,100,25,0.5)', color: '#F26419', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 20, marginBottom: 24 }}>
          Emlak Videosu Servisi
        </div>
        <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Arsanız için <span style={{ color: '#F26419' }}>profesyonel</span><br />tanıtım videosu
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Arsa bilgilerini doldurun, fotoğraflarınızı yükleyin. 1-2 iş günü içinde profesyonel tanıtım videosu ve metni hazır olsun.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[['1-2', 'İş günü teslim'], ['2500₺', 'Sabit fiyat'], ['%20', 'Ön ödeme, kalanı teslimde']].map(([val, label]) => (
            <div key={val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 32, fontWeight: 800, color: '#F26419' }}>{val}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NASIL ÇALIŞIR */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#F26419', marginBottom: 10 }}>Nasıl Çalışır</div>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, letterSpacing: -0.5, marginBottom: 40 }}>4 adımda videonuz hazır</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              ['01', 'Formu Doldurun', 'Arsa bilgilerini, konumu ve öne çıkan özellikleri girin.'],
              ['02', 'Fotoğraf Yükleyin', 'Arsanızın fotoğraflarını yükleyin. Drone görüntüsü varsa link ekleyin.'],
              ['03', '%20 Ödeyin', 'Sipariş onayı için 500 TL ön ödeme yapın. Kalan 2.000 TL teslimde.'],
              ['04', 'Videonuzu Alın', '1-2 iş günü içinde profesyonel video e-posta ile teslim edilir.'],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ background: '#F7F4F1', border: '1px solid #E0D9D0', borderRadius: 16, padding: 28 }}>
                <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 40, fontWeight: 800, color: '#E0D9D0', lineHeight: 1, marginBottom: 16 }}>{num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: '#777', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİYAT */}
      <section style={{ background: '#F7F4F1', padding: '80px 24px' }}>
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#F26419', marginBottom: 10 }}>Fiyatlandırma</div>
            <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800 }}>Şeffaf, tek fiyat</div>
          </div>
          <div style={{ border: '2px solid #F26419', borderRadius: 24, overflow: 'hidden' }}>
            <div style={{ background: '#F26419', color: 'white', padding: 32, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Profesyonel Emlak Videosu</div>
              <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 52, fontWeight: 800, margin: '16px 0 4px' }}>2.500 <span style={{ fontSize: 18, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>KDV dahil · Tek seferlik</div>
            </div>
            <div style={{ padding: 32, background: 'white' }}>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                {['Profesyonel video montaj (30-60 saniye)', 'Türkçe tanıtım metni yazımı', 'Müzik ve ses tasarımı', 'HD kalite (1080p) teslim', 'Sosyal medyaya hazır format', '1 revizyon hakkı'].map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#333' }}>
                    <span style={{ color: '#2E9E5B', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <div style={{ background: '#F7F4F1', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Ödeme Planı</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[['%20', 'Sipariş verirken', '500 TL'], ['%80', 'Teslimatta', '2.000 TL']].map(([pct, label, amount]) => (
                    <div key={pct} style={{ border: '1px solid #E0D9D0', borderRadius: 10, padding: 14, textAlign: 'center', background: 'white' }}>
                      <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 22, fontWeight: 800, color: '#F26419' }}>{pct}</div>
                      <div style={{ fontSize: 11, color: '#777', marginTop: 4 }}>{label}</div>
                      <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>{amount}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/#siparis-formu" style={{ display: 'block', width: '100%', background: '#F26419', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 16, fontWeight: 700, padding: 16, borderRadius: 12, textDecoration: 'none', textAlign: 'center' }}>
                Sipariş Ver & Formu Doldur →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FORM YÖNLENDIRMESI */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }} id="siparis-formu">
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Hemen Sipariş Verin</h2>
          <p style={{ color: '#777', marginBottom: 32, lineHeight: 1.7 }}>
            Formu doldurun, ön ödemenizi yapın. Ekibimiz 1-2 iş günü içinde videonuzu hazırlasın.
          </p>
          <a href="https://studio.mustakit.com" style={{ display: 'inline-block', background: '#F26419', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 16, fontWeight: 700, padding: '16px 40px', borderRadius: 12, textDecoration: 'none' }}>
            Sipariş Formunu Aç →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>Sık Sorulan Sorular</div>
          {[
            ['Video ne kadar sürede teslim edilir?', 'Siparişiniz ve ön ödemeniz alındıktan sonra 1-2 iş günü içinde videonuz hazırlanır ve e-posta adresinize gönderilir.'],
            ['Kaç fotoğraf yüklemeliyim?', 'En az 5-6 fotoğraf öneriyoruz. Drone görüntüsü varsa mutlaka ekleyin.'],
            ['Revizyon hakkım var mı?', 'Evet, her siparişte 1 revizyon hakkınız bulunmaktadır.'],
            ['Videoyu nasıl kullanabilirim?', 'Instagram, YouTube, WhatsApp ve diğer tüm platformlarda kullanabilirsiniz.'],
            ['Kalan 2.000 TL'yi ne zaman ödeyeceğim?', 'Videonuzu teslim aldıktan ve memnun kaldıktan sonra kalan 2.000 TL için size link göndereceğiz.'],
          ].map(([q, a]) => (
            <details key={q} style={{ border: '1px solid #E0D9D0', borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
              <summary style={{ padding: '18px 20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>{q}</summary>
              <p style={{ padding: '0 20px 18px', fontSize: 13, color: '#777', lineHeight: 1.7 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '28px 24px', fontSize: 13 }}>
        <p>© 2025 <a href="https://mustakit.com" style={{ color: '#F26419', textDecoration: 'none' }}>Müstakit</a> · Müstakil evinizi yaptırmanın en şeffaf yolu</p>
        <p style={{ marginTop: 8 }}>studio.mustakit.com — Emlak Video Servisi</p>
      </footer>

    </main>
  )
}
