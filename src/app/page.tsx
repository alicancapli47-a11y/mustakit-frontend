import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mustakit Studio - Arsa ve Yapi Projelerinizin Sanal Videolari",
  description: "Emlakcilar, arsa sahipleri ve muteahhitler icin profesyonel tanitim videosu. 1-2 is gunu teslim.",
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
          Profesyonel Video Servisi
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
          Arsa ve Yapi Projelerinizin <span style={{ color: "#F26419" }}>Sanal Videolari</span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Arsanizi veya yapi projenizi profesyonel video ile tanitin. 1-2 is gunu icinde teslim.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 700, margin: "0 auto" }}>
          <Link href="https://studio.mustakit.com" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{"\u{1F3D6}"}</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Arsa Videosu</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>Emlakcilar ve arsa sahipleri icin tanitim videosu</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>2.500 TL</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Siparis Ver
            </div>
          </Link>

          <Link href="https://studio.mustakit.com/yapi-projesi" style={{ textDecoration: "none", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 16, padding: 28, textAlign: "left", display: "block" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{"\u{1F3D7}"}</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, color: "white", marginBottom: 6 }}>Yapi Projesi Videosu</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 14, lineHeight: 1.5 }}>Muteahhitler icin kroki/plan tabanli proje videosu</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, color: "#F26419" }}>3.000 TL</div>
            <div style={{ marginTop: 14, background: "#F26419", color: "white", textAlign: "center", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
              Siparis Ver
            </div>
          </Link>
        </div>
      </div>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Nasil Calisir</div>
          <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: -0.5, marginBottom: 40 }}>4 adimda videonuz hazir</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>01</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Hizmet Secin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Arsa videosu mu yapi projesi videosu mu istediginizi secin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>02</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>Bilgi ve Gorsel Yukleyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Fotograf, kroki veya plan yukleyin. Detayli aciklama ekleyin.</div>
            </div>
            <div style={{ background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800, color: "#E0D9D0", lineHeight: 1, marginBottom: 16 }}>03</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>%20 Odeyin</div>
              <div style={{ fontSize: 13, color: "#777", lineHeight: 1.6 }}>Siparis onayi icin on odeme yapin. Kalani teslimde odersiniz.</div>
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
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 10 }}>Fiyatlandirma</div>
            <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800 }}>Iki Hizmet, Seffaf Fiyat</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ border: "2px solid #F26419", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#F26419", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Arsa Videosu</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>2.500 <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Arsa fotograflari ile video</li>
                  <li>+ Konum ve ozellik anlatimi</li>
                  <li>+ 30-60 saniye HD video</li>
                  <li>+ 1 revizyon hakki</li>
                </ul>
                <Link href="https://studio.mustakit.com" style={{ display: "block", width: "100%", background: "#F26419", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Siparis Ver
                </Link>
              </div>
            </div>

            <div style={{ border: "2px solid #1a1a1a", borderRadius: 24, overflow: "hidden", background: "white" }}>
              <div style={{ background: "#1a1a1a", color: "white", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Yapi Projesi Videosu</div>
                <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 40, fontWeight: 800 }}>3.000 <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>TL</span></div>
              </div>
              <div style={{ padding: 24 }}>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, fontSize: 13, color: "#333" }}>
                  <li>+ Kroki/plan tabanli gorsellestirme</li>
                  <li>+ Muteahhitler icin ozel format</li>
                  <li>+ Proje anlatim metni</li>
                  <li>+ 1 revizyon hakki</li>
                </ul>
                <Link href="https://studio.mustakit.com/yapi-projesi" style={{ display: "block", width: "100%", background: "#1a1a1a", color: "white", fontWeight: 700, padding: 14, borderRadius: 10, textDecoration: "none", textAlign: "center", fontSize: 14 }}>
                  Siparis Ver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>2025 Mustakit - Mustakil evinizi yaptirmanin en seffaf yolu</p>
        <p style={{ marginTop: 8 }}>studio.mustakit.com - Profesyonel Video Servisi</p>
      </footer>
    </main>
  )
}
