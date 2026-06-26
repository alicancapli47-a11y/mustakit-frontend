import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Neden Arsa Satışlarınız İçin Sanal Drone Video Gerekli? | Müstakit Studio",
  description: "Arsa satışlarında video kullanmanın satışları nasıl artırdığını istatistiklerle inceliyoruz. Sanal drone video ile arsanızı daha hızlı satın.",
  keywords: "arsa satış videosu, sanal drone video, emlak videosu, arsa tanıtım videosu, drone çekim arsa",
}

export default function ArsaVideoPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", background: "#fff", minHeight: "100vh" }}>
      <nav style={{ borderBottom: "1px solid #E0D9D0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800, fontSize: 20, color: "#F26419", textDecoration: "none" }}>
            Müstakit <span style={{ color: "#1a1a1a", fontWeight: 400, fontSize: 14 }}>Studio</span>
          </Link>
          <Link href="https://studio.mustakit.com" style={{ background: "#F26419", color: "white", fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 8, textDecoration: "none" }}>
            Sipariş Ver
          </Link>
        </div>
      </nav>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#F26419", marginBottom: 12 }}>
          Arsa Satışı Rehberi
        </div>
        <h1 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
          Neden Arsa Satışlarınız İçin Sanal Drone Video Gerekli?
        </h1>
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8, marginBottom: 32 }}>
          Arsa satışında en büyük zorluk, alıcıya arazinin gerçek potansiyelini gösterebilmektir. Fotoğraflar yetersiz kalır,
          metinler yeterince ikna edici olmaz. İşte burada <strong>sanal drone video</strong> devreye girer ve oyunun
          kurallarını tamamen değiştirir.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Video Olan İlanlar Daha Fazla İlgi Çekiyor
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Emlak pazarlaması üzerine yapılan araştırmalara göre, içerisinde video bulunan ilanlar metin ve fotoğraf tabanlı
          ilanlardan <strong>üç kat daha fazla talep aldı</strong>. Drone ile çekilmiş havadan görüntüler, arsanın konumunu,
          büyüklüğünü ve çevresini tek bir bakışta anlatabiliyor — bu da alıcının kararını hızlandırıyor.
        </p>

        <div style={{ background: "#F7F4F1", borderRadius: 16, padding: 28, marginBottom: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: "#F26419" }}>📊 Çarpıcı Rakamlar</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>3x</div>
              <div style={{ fontSize: 14, color: "#555" }}>Video içeren ilanlar metin tabanlı ilanlardan üç kat daha fazla soru/talep alıyor</div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>%73</div>
              <div style={{ fontSize: 14, color: "#555" }}>Ev/arsa alıcılarının çoğu, video izledikten sonra bir emlakçı veya satıcıyla daha hızlı iletişime geçtiklerini belirtiyor</div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 28, fontWeight: 800, color: "#1a1a1a", minWidth: 70 }}>%80+</div>
              <div style={{ fontSize: 14, color: "#555" }}>Alıcılar mobil cihazdan emlak/arsa aramalarının büyük bölümünü mobilden yapıyor — video mobilde fotoğraftan çok daha etkili</div>
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Drone Görüntüsü Fotoğrafın Yapamadığını Yapar
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Yerden çekilen fotoğraflar arsanın sınırlarını, eğimini, manzarasını ve çevresindeki yapılaşmayı net şekilde
          gösteremez. <strong>Sanal drone video</strong> ile arsa havadan görüntülenir; alıcı arazinin tam şeklini, yola
          uzaklığını, etraftaki gelişmeleri ve genel potansiyelini saniyeler içinde kavrar.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Özellikle şehir dışından veya yurt dışından alıcılarla çalışan emlakçılar için bu çok kritiktir — alıcı arsayı
          bizzat görmeden, video sayesinde güçlü bir izlenim edinebilir.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Sosyal Medyada Paylaşım Gücü
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Instagram, YouTube ve WhatsApp üzerinden paylaşılan videolar, statik fotoğraflara göre çok daha fazla etkileşim
          alır. Emlak sektöründeki ajanların büyük çoğunluğu artık pazarlama stratejilerinde video formatını öncelikli
          olarak kullanıyor — çünkü algoritmalar videoyu öne çıkarıyor ve organik erişimi artırıyor.
        </p>

        <h2 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 24, fontWeight: 800, marginTop: 40, marginBottom: 16 }}>
          Profesyonel Video, Profesyonel Algı Yaratır
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: 20 }}>
          Telefonla çekilmiş sallantılı bir video yerine, profesyonel kurgu, müzik ve anlatım metniyle hazırlanmış bir video,
          alıcıya satıcının/emlakçının işine ne kadar ciddi yaklaştığını gösterir. Bu da güven oluşturur ve pazarlık
          sürecini kolaylaştırır.
        </p>

        <div style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f0e 100%)", borderRadius: 20, padding: 36, textAlign: "center", marginTop: 48, marginBottom: 24 }}>
          <div style={{ fontSize: 28, marginBottom: 12 }}>🏞️</div>
          <h3 style={{ fontFamily: "Plus Jakarta Sans, sans-serif", color: "white", fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
            Arsanızı Sanal Drone Video ile Tanıtın
          </h3>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, marginBottom: 24, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
            1-2 iş günü içinde teslim, 4.000 TL sabit fiyat. Profesyonel video ile arsanızı daha hızlı satın.
          </p>
          <Link href="https://studio.mustakit.com" style={{ display: "inline-block", background: "#F26419", color: "white", fontWeight: 700, padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 15 }}>
            Sipariş Ver →
          </Link>
        </div>

        <div style={{ borderTop: "1px solid #E0D9D0", paddingTop: 24, marginTop: 24 }}>
          <Link href="/insaat-proje-video" style={{ color: "#F26419", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>
            → İnşaat projeniz için de video gerekli mi? Okuyun
          </Link>
        </div>
      </article>

      <footer style={{ background: "#1a1a1a", color: "rgba(255,255,255,0.5)", textAlign: "center", padding: "28px 24px", fontSize: 13 }}>
        <p>© 2025 Müstakit · Müstakil evinizi yaptırmanın en şeffaf yolu</p>
      </footer>
    </main>
  )
}
