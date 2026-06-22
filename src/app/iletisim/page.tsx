import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "İletişim | Müstakit Studio",
  description: "Müstakit Studio ile iletişime geçin. Arsa veya inşaat proje videonuz için sorularınızı bize ulaştırın.",
}

export default function IletisimPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419", textDecoration: "none" }}>
            Müstakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </Link>
        </div>
      </nav>

      <section style={{ maxWidth: 640, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 12 }}>
          İletişim
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, marginBottom: 16 }}>
          Bize Ulaşın
        </h1>
        <p style={{ fontSize: 15, color: "#777", lineHeight: 1.7, marginBottom: 48 }}>
          Arsa veya inşaat proje videonuzla ilgili sorularınız mı var? Aşağıdaki kanallardan
          bize ulaşabilirsiniz. Genellikle aynı gün içinde dönüş yapıyoruz.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 420, margin: "0 auto" }}>
          <a href="mailto:info@mustakit.com" style={{ display: "flex", alignItems: "center", gap: 16, background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 14, padding: "20px 24px", textDecoration: "none", textAlign: "left" }}>
            <div style={{ fontSize: 28 }}>✉️</div>
            <div>
              <div style={{ fontSize: 12, color: "#777", marginBottom: 2 }}>E-posta</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>info@mustakit.com</div>
            </div>
          </a>

          <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 16, background: "#F7F4F1", border: "1px solid #E0D9D0", borderRadius: 14, padding: "20px 24px", textDecoration: "none", textAlign: "left" }}>
            <div style={{ fontSize: 28 }}>💬</div>
            <div>
              <div style={{ fontSize: 12, color: "#777", marginBottom: 2 }}>WhatsApp</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a" }}>Hemen Mesaj Gönder</div>
            </div>
          </a>

          <Link href="https://studio.mustakit.com" style={{ display: "flex", alignItems: "center", gap: 16, background: "#F26419", borderRadius: 14, padding: "20px 24px", textDecoration: "none", textAlign: "left" }}>
            <div style={{ fontSize: 28 }}>🎬</div>
            <div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginBottom: 2 }}>Hemen Başla</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>Video Siparişi Ver</div>
            </div>
          </Link>
        </div>

        <p style={{ fontSize: 13, color: "#999", marginTop: 48 }}>
          Müstakit Studio · Müstakil evinizi yaptırmanın en şeffaf yolu
        </p>
      </section>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>© 2025 Müstakit</p>
      </footer>
    </main>
  )
}
