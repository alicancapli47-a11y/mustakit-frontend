import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mustakit Studio - Profesyonel Arsa Tanitim Videosu",
  description: "Emlakcilar ve arsa sahipleri icin profesyonel tanitim videosu. 1-2 is gunu teslim. 2500 TL sabit fiyat.",
}

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419" }}>
            Mustakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </span>
          <span style={{ background: "#F26419", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
            Profesyonel Video
          </span>
        </div>
      </nav>

      <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(242,100,25,0.2)", border: "1px solid rgba(242,100,25,0.5)", color: "#F26419", fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
          Emlak Videosu Servisi
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Arsaniz icin <span style={{ color: "#F26419" }}>profesyonel</span><br />tanitim videosu
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Arsa bilgilerini doldurun, fotograflarinizi yukleyin. 1-2 is gunu icinde profesyonel tanitim videosu ve metni hazir olsun.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>1-2</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Is gunu teslim</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>2500TL</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Sabit fiyat</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 32, fontWeight: 800, color: "#F26419" }}>%20</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>On odeme, kalani teslimde</div>
          </div>
        </div>
      </div>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Nasil Calisir</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 40 }}>4 adimda videonuz hazir</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>01</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Formu Doldurun</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Arsa bilgilerini, konumu ve one cikan ozellikleri girin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>02</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Fotograf Yukleyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Arsanizin fotograflarini yukleyin. Drone goruntusu varsa link ekleyin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>03</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>%20 Odeyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Siparis onayi icin 500 TL on odeme yapin. Kalan 2.000 TL teslimde.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>04</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Videonuzu Alin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>1-2 is gunu icinde profesyonel video e-posta ile teslim edilir.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F4F1", padding: "80px 24px" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Fiyatlandirma</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800 }}>Seffaf, tek fiyat</div>
          </div>
          <div style={{ border: "2px solid #F26419", borderRadius: 24, overflow: "hidden" }}>
            <div style={{ background: "#F26419", color: "white", padding: 32, textAlign: "center" }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Profesyonel Emlak Videosu</div>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 52, fontWeight: 800, margin: "16px 0 4px" }}>2.500 <span style={{ fontSize: 18, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>KDV dahil - Tek seferlik</div>
            </div>
            <div style={{ padding: 32, background: "white" }}>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>Profesyonel video montaj (30-60 saniye)
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>Turkce tanitim metni yazimi
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>Muzik ve ses tasarimi
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>HD kalite (1080p) teslim
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>Sosyal medyaya hazir format
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333" }}>
                  <span style={{ color: "#2E9E5B", fontWeight: 700, flexShrink: 0 }}>+</span>1 revizyon hakki
                </li>
              </ul>
              <div style={{ background: "#F7F4F1", borderRadius: 12, padding: 16, marginBottom: 24 }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Odeme Plani</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ border: "1px solid #E0D9D0", borderRadius: 10, padding: 14, textAlign: "center", background: "white" }}>
                    <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 22, fontWeight: 800, color: "#F26419" }}>%20</div>
                    <div style={{ fontSize: 11, color: "#777", marginTop: 4 }}>Siparis verirken</div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>500 TL</div>
                  </div>
                  <div style={{ border: "1px solid #E0D9D0", borderRadius: 10, padding: 14, textAlign: "center", background: "white" }}>
                    <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 22, fontWeight: 800, color: "#F26419" }}>%80</div>
                    <div style={{ fontSize: 11, color: "#777", marginTop: 4 }}>Teslimatta</div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>2.000 TL</div>
                  </div>
                </div>
              </div>
              <Link href="https://studio.mustakit.com" style={{ display: "block", width: "100%", background: "#F26419", color: "white", fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 16, fontWeight: 700, padding: 16, borderRadius: 12, textDecoration: "none", textAlign: "center" }}>
                Siparis Ver ve Formu Doldur
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, textAlign: "center", marginBottom: 40 }}>Sik Sorulan Sorular</div>
          <details style={{ border: "1px solid #E0D9D0", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <summary style={{ padding: "18px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Video ne kadar surede teslim edilir?</summary>
            <p style={{ padding: "0 20px 18px", fontSize: 13, color: "#777", lineHeight: 1.7 }}>Siparisiniz ve on odemeniz alindiktan sonra 1-2 is gunu icinde videonuz hazirlanir ve e-posta adresinize gonderilir.</p>
          </details>
          <details style={{ border: "1px solid #E0D9D0", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <summary style={{ padding: "18px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Kac fotograf yuklemeliyim?</summary>
            <p style={{ padding: "0 20px 18px", fontSize: 13, color: "#777", lineHeight: 1.7 }}>En az 5-6 fotograf oneriyoruz. Drone goruntusu varsa mutlaka ekleyin.</p>
          </details>
          <details style={{ border: "1px solid #E0D9D0", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <summary style={{ padding: "18px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Revizyon hakkim var mi?</summary>
            <p style={{ padding: "0 20px 18px", fontSize: 13, color: "#777", lineHeight: 1.7 }}>Evet, her siparis icin 1 revizyon hakkiniz bulunmaktadir.</p>
          </details>
          <details style={{ border: "1px solid #E0D9D0", borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
            <summary style={{ padding: "18px 20px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Kalan 2000 TL ne zaman odenir?</summary>
            <p style={{ padding: "0 20px 18px", fontSize: 13, color: "#777", lineHeight: 1.7 }}>Videonuzu teslim aldiktan ve memnun kaldiktan sonra kalan 2.000 TL icin size link gonderecegiz.</p>
          </details>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>2025 Mustakit - Mustakil evinizi yaptirmanin en seffaf yolu</p>
        <p style={{ marginTop: 8 }}>studio.mustakit.com - Emlak Video Servisi</p>
      </footer>
    </main>
  )
}
