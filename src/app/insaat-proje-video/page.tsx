import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Neden İnşaat Projeleriniz İçin Sanal Video Gerekli? | Müstakit Studio",
  description: "Müteahhitler için proje tanıtım videosunun satış sürecine etkisini istatistiklerle inceliyoruz. Kroki ve planlarınızı sanal videoya dönüştürün.",
  keywords: "inşaat proje videosu, müteahhit videosu, sanal proje tanıtımı, kroki video, plan görselleştirme, proje tanıtım filmi",
}

export default function InsaatProjeVideoPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419", textDecoration: "none" }}>
            Müstakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </Link>
          <Link href="https://studio.mustakit.com/yapi-projesi" style={{ background: "#1a1a1a", color: "white", fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
            Sipariş Ver
          </Link>
        </div>
      </nav>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 12 }}>
          Müteahhitler İçin Rehber
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
          Neden İnşaat Projeleriniz İçin Sanal Video Gerekli?
        </h1>
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 32 }}>
          Henüz inşa edilmemiş veya inşaat halindeki bir projeyi satmak, en zorlu satış senaryolarından biridir.
          Alıcı, kağıt üzerindeki kroki ve teknik çizimlerden projenin son halini hayal etmekte zorlanır. İşte bu noktada
          <strong> sanal proje videosu</strong> devreye girer ve satış sürecini kökten değiştirir.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Kroki ve Plan, Çoğu Alıcı İçin Yetersiz Kalır
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Mimari kroki, ölçekli plan veya 2D çizimler profesyoneller için anlaşılırdır — ama ortalama bir alıcı için
          soyut kalır. Bir mutfak, salon veya yatak odasının gerçek boyutunu ve atmosferini düz bir çizimden hayal etmek
          çoğu kişi için mümkün değildir. Sanal video, bu boşluğu doldurur ve projeyi <strong>yaşanabilir</strong> hale getirir.
        </p>

        <div style={{ background: "#F7F4F1", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: "#F26419" }}>📊 Çarpıcı Rakamlar</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>3x</div>
              <div style={{ fontSize: 14, color: "#555" }}>Video içeren proje ilanları, sadece kroki/plan paylaşılan ilanlardan kat kat daha fazla soru ve talep alıyor</div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>%73</div>
              <div style={{ fontSize: 14, color: "#555" }}>Potansiyel alıcılar, video izledikten sonra müteahhit veya satış ekibiyle daha hızlı iletişime geçiyor</div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>%80+</div>
              <div style={{ fontSize: 14, color: "#555" }}>Proje aramalarının büyük çoğunluğu mobil cihazdan yapılıyor — video, mobilde teknik çizimden çok daha etkili iletişim kuruyor</div>
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Erken Satış = Daha İyi Nakit Akışı
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Müteahhitler için inşaat öncesi veya inşaat sürecindeki satış (ön satış), projenin finansmanını doğrudan
          etkiler. Ne kadar erken ve ne kadar fazla daire/villa satılırsa, inşaat süreci o kadar rahat finanse edilir.
          Sanal video, henüz temel atılmamış bir projeyi bile alıcıya <strong>somut ve güven verici</strong> şekilde
          gösterebilir — bu da ön satışları hızlandırır.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Rakiplerinizden Ayrışın
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Türkiye'de inşaat sektöründe rekabet çok yüksek. Aynı bölgede birden fazla proje aynı anda satışa çıkabiliyor.
          Sadece broşür ve kroki ile pazarlama yapan bir müteahhit, profesyonel video kullanan rakibinin karşısında
          dikkat çekmekte zorlanır. Video, projenizi <strong>akılda kalıcı</strong> hale getirir.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Satış Ofisinde ve Dijitalde Kullanılabilir
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Hazırlanan proje videosu sadece sosyal medyada değil, satış ofisinizde müşteri sunumlarında, WhatsApp
          üzerinden gönderilen tekliflerde ve emlak portallarındaki ilanlarınızda kullanılabilir. Tek bir yatırım,
          birden fazla satış kanalında işinizi kolaylaştırır.
        </p>

        <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", borderRadius: 20, padding: 36, textAlign: "center", marginTop: 48, marginBottom: 24 }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>🏗️</div>
          <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", color: "white", fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
            Projenizi Sanal Video ile Tanıtın
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 24, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            Kroki ve planlarınızı yükleyin, 1-2 iş günü içinde profesyonel proje videonuz hazır. 3.000 TL sabit fiyat.
          </p>
          <Link href="https://studio.mustakit.com/yapi-projesi" style={{ display: "inline-block", background: "#F26419", color: "white", fontWeight: 700, padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 15 }}>
            Sipariş Ver →
          </Link>
        </div>

        <div style={{ borderTop: "1px solid #E0D9D0", paddingTop: 24, marginTop: 24 }}>
          <Link href="/arsa-video" style={{ color: "#F26419", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>
            → Arsa satışı için sanal drone video hakkında da okuyun
          </Link>
        </div>
      </article>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>© 2025 Müstakit · Müstakil evinizi yaptırmanın en şeffaf yolu</p>
      </footer>
    </main>
  )
}
