import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Müstakit Studio - Arsa ve Yapı Projelerinizin Sanal Videoları",
  description: "Emlakçılar, arsa sahipleri ve müteahhitler için profesyonel tanıtım videosu. 1-2 iş günü teslim.",
}

export default function HomePage() {
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

      <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", color: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(242,100,25,0.2)", border: "1px solid rgba(242,100,25,0.5)", color: "#F26419", fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 24 }}>
          Profesyonel Video Servisi
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Arsa ve Yapı Projelerinizin <span style={{ color: "#F26419" }}>Sanal Videoları</span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Arsanızı veya yapı projenizi profesyonel video ile tanıtın. 1-2 iş günü içinde teslim.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 700, margin: "0 auto" }}>
          <Link href="https://studio.mustakit.com" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏞️</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Arsa Videosu</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>Emlakçılar ve arsa sahipleri için tanıtım videosu</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>2.500 TL</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Sipariş Ver
            </div>
          </Link>

          <Link href="https://studio.mustakit.com/yapi-projesi" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏗️</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Yapı Projesi Videosu</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>Müteahhitler için kroki/plan tabanlı proje videosu</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>3.000 TL</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Sipariş Ver
            </div>
          </Link>
        </div>
      </div>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Nasıl Çalışır</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 40 }}>4 adımda videonuz hazır</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>01</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Hizmet Seçin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Arsa videosu mu yapı projesi videosu mu istediğinizi seçin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>02</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Bilgi ve Görsel Yükleyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Fotoğraf, kroki veya plan yükleyin. Detaylı açıklama ekleyin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>03</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>%20 Ödeyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Sipariş onayı için ön ödeme yapın. Kalanı teslimde ödersiniz.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>04</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Videonuzu Alın</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>1-2 iş günü içinde profesyonel video e-posta ile teslim edilir.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F7F4F1", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Fiyatlandırma</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800 }}>İki Hizmet, Şeffaf Fiyat</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #F26419", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#F26419", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Arsa Videosu</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>2.500 <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Arsa fotoğrafları ile video</li>
                  <li>+ Konum ve özellik anlatımı</li>
                  <li>+ 30-60 saniye HD video</li>
                  <li>+ 1 revizyon hakkı</li>
                </ul>
                <Link href="https://studio.mustakit.com" style={{ display: "block", width: "100%", background: "#F26419", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Sipariş Ver
                </Link>
              </div>
            </div>

            <div style={{ border: "2px solid #1a1a1a", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#1a1a1a", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Yapı Projesi Videosu</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>3.000 <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Kroki/plan tabanlı görselleştirme</li>
                  <li>+ Müteahhitler için özel format</li>
                  <li>+ Proje anlatım metni</li>
                  <li>+ 1 revizyon hakkı</li>
                </ul>
                <Link href="https://studio.mustakit.com/yapi-projesi" style={{ display: "block", width: "100%", background: "#1a1a1a", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Sipariş Ver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>© 2025 Müstakit - Müstakil evinizi yaptırmanın en şeffaf yolu</p>
        <p style={{ marginTop: 8 }}>studio.mustakit.com - Profesyonel Video Servisi</p>
      </footer>
    </main>
  )
}
