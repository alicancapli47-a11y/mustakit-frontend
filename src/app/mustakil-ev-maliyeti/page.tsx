import type { Metadata } from 'next'
import { MaliyetHesaplayici } from './MaliyetHesaplayici'

export const metadata: Metadata = {
  title: '100 m² Müstakil Ev Kaça Mal Olur? 2025 Maliyet Hesaplama | Müstakit',
  description: '2025 yılında Türkiye\'de müstakil ev yapım maliyeti hesaplama aracı. 100 m², 150 m², 200 m² ev ne kadar tutar? Güncel piyasa fiyatlarıyla öğren.',
  keywords: 'müstakil ev maliyeti, ev yapım maliyeti 2025, 100 m2 ev maliyeti, müstakil ev fiyatı, ev yaptırma maliyeti',
  openGraph: {
    title: '100 m² Müstakil Ev Kaça Mal Olur? 2025',
    description: 'Güncel piyasa fiyatlarıyla müstakil ev maliyet hesaplayıcı.',
    type: 'article',
  },
}

export default function MaliyetPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-head font-extrabold text-xl text-primary">Müstakit</a>
          <a href="/giris" className="btn-primary text-sm">Ücretsiz Başla</a>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <nav className="text-xs text-muted mb-6">
          <a href="/" className="hover:text-primary">Ana Sayfa</a>
          <span className="mx-2">/</span>
          <span>Maliyet Rehberi</span>
        </nav>

        {/* Title */}
        <h1 className="font-head text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4">
          100 m² Müstakil Ev Kaça Mal Olur? <span className="text-primary">2025 Güncel Rehber</span>
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted mb-8 pb-8 border-b border-border">
          <span>📅 Mayıs 2025</span>
          <span>•</span>
          <span>🕐 8 dakika okuma</span>
          <span>•</span>
          <span>✍️ Müstakit Ekibi</span>
        </div>

        {/* Özet kutusu */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-10">
          <div className="font-head font-bold text-base mb-3">📌 Özet</div>
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            <li>✅ 100 m² müstakil ev maliyeti: <strong>1.6M – 2.4M TL</strong> (2025, arsa hariç)</li>
            <li>✅ Maliyet en çok <strong>şehir, yapı tipi ve malzeme kalitesine</strong> göre değişir</li>
            <li>✅ Müteahhit kârsız, aracısız çalışırsanız <strong>%20-30 tasarruf</strong> mümkün</li>
            <li>✅ Aşağıdaki hesaplayıcı ile <strong>kendi projenizin tahmini maliyetini</strong> öğrenin</li>
          </ul>
        </div>

        {/* Makale içeriği */}
        <div className="prose max-w-none">

          <h2 className="font-head text-2xl font-bold mt-10 mb-4">Müstakil Ev Maliyetini Belirleyen Faktörler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Türkiye'de müstakil ev yaptırmanın maliyeti, birbirinden farklı onlarca faktöre bağlıdır.
            Aynı büyüklükteki iki ev; şehrine, kullanılan malzemeye ve yapı tipine göre neredeyse iki katı fark edebilir.
          </p>

          <h3 className="font-head text-lg font-bold mt-8 mb-3">1. Şehir ve Bölge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            İstanbul'da inşaat maliyeti Türkiye ortalamasının yaklaşık <strong>%35-40 üzerindedir.</strong>
            İzmir ve Ankara %15-25 daha pahalıyken, Anadolu şehirlerinde (Denizli, Konya, Samsun gibi)
            maliyetler belirgin şekilde düşer. Bunun başlıca nedeni işçilik ücretleri ve malzeme nakliye maliyetleridir.
          </p>

          <div className="bg-surface rounded-xl p-5 mb-6">
            <div className="font-semibold text-sm mb-3">Şehire Göre Kaba İnşaat m² Maliyeti (2025)</div>
            <div className="flex flex-col gap-2">
              {[
                { city: 'İstanbul', min: 11000, max: 18000, mult: 'Yüksek' },
                { city: 'İzmir / Ankara / Antalya', min: 9500, max: 15000, mult: 'Orta-Yüksek' },
                { city: 'Bursa / Kocaeli', min: 9000, max: 14000, mult: 'Orta' },
                { city: 'Denizli / Konya / Samsun', min: 7500, max: 12000, mult: 'Standart' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{r.city}</span>
                  <span className="font-semibold text-primary">{r.min.toLocaleString('tr-TR')} – {r.max.toLocaleString('tr-TR')} TL/m²</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="font-head text-lg font-bold mt-8 mb-3">2. Yapı Tipi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Türkiye'de en yaygın yapı tipi <strong>betonarme</strong> olmakla birlikte, son yıllarda çelik
            ve prefabrik yapılar da popülerleşmektedir. Her tipin kendine özgü maliyet profili vardır:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { type: 'Betonarme', cost: '8.000–14.000', note: 'En yaygın', color: 'bg-blue-50 border-blue-200' },
              { type: 'Çelik Konstrüksiyon', cost: '9.000–16.000', note: 'Depreme dayanıklı', color: 'bg-green-50 border-green-200' },
              { type: 'Gazbeton (AAC)', cost: '7.500–13.000', note: 'Hafif, yalıtımlı', color: 'bg-amber-50 border-amber-200' },
              { type: 'Prefabrik', cost: '6.000–11.000', note: 'Hızlı kurulum', color: 'bg-purple-50 border-purple-200' },
            ].map((t, i) => (
              <div key={i} className={`border rounded-xl p-4 ${t.color}`}>
                <div className="font-semibold text-xs mb-1">{t.type}</div>
                <div className="font-head font-bold text-sm">{t.cost}</div>
                <div className="text-xs text-muted mt-1">{t.note}</div>
              </div>
            ))}
          </div>

          <h3 className="font-head text-lg font-bold mt-8 mb-3">3. Maliyet Kalemleri</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            100 m² bir müstakil ev için ortalama maliyet dağılımı şu şekildedir:
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {[
              { label: 'Proje, ruhsat, zemin etüdü', pct: '8–12%', est: '160K – 288K TL' },
              { label: 'Kaba inşaat (temel, duvar, çatı)', pct: '40–45%', est: '640K – 1.08M TL' },
              { label: 'Elektrik & tesisat (kaba + ince)', pct: '12–15%', est: '192K – 360K TL' },
              { label: 'İnce işler (sıva, karo, boya)', pct: '20–25%', est: '320K – 600K TL' },
              { label: 'Doğrama (kapı, pencere)', pct: '8–10%', est: '128K – 240K TL' },
              { label: 'Peyzaj & dış çevre', pct: '3–5%', est: '48K – 120K TL' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-border text-sm">
                <span className="text-gray-700">{item.label}</span>
                <div className="text-right">
                  <div className="font-semibold text-primary">{item.est}</div>
                  <div className="text-xs text-muted">{item.pct}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between py-3 text-sm font-bold">
              <span>TOPLAM (100 m²)</span>
              <span className="text-primary text-lg font-head">1.6M – 2.4M TL</span>
            </div>
          </div>

          <h2 className="font-head text-2xl font-bold mt-12 mb-4">Müteahhitsiz Yaptırırsanız Ne Kadar Tasarruf Edersiniz?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geleneksel yöntemde bir müteahhit tüm süreci yönetir ve toplam maliyetin <strong>%15-25'ini</strong>
            kâr olarak alır. 2 milyon TL'lik bir projede bu, 300.000 – 500.000 TL anlamına gelir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Müstakit ile</strong> mimar, usta ve malzemecilere doğrudan ulaşarak bu aracı komisyonu ortadan kaldırabilirsiniz.
            Platform AI destekli süreç takibi ve escrow (güvenli ödeme) sistemiyle her aşamayı güvenle yönetmenize yardımcı olur.
          </p>

          <div className="bg-primary/5 border border-primary rounded-2xl p-6 mb-10">
            <div className="font-head font-bold text-lg mb-2">💡 Örnek Hesaplama</div>
            <div className="text-sm text-gray-700 leading-relaxed">
              Denizli'de 120 m² betonarme ev · Standart malzeme kalitesi<br />
              <span className="line-through text-muted">Müteahhitli: ~2.9M TL</span>
              {'  →  '}
              <span className="font-bold text-primary">Müstakit ile: ~2.2M TL</span>
              <span className="text-muted ml-2">(~700K TL tasarruf)</span>
            </div>
          </div>

          <h2 className="font-head text-2xl font-bold mt-12 mb-4">Sık Sorulan Sorular</h2>
          <div className="flex flex-col gap-4 mb-10">
            {[
              { q: 'Arsa maliyeti dahil mi?', a: 'Hayır. Yukarıdaki tüm rakamlar arsa hariçtir. Arsa maliyeti lokasyona göre çok büyük değişkenlik gösterir.' },
              { q: 'KDV dahil mi?', a: 'İnşaat işçilik ve malzemelerde KDV oranları farklıdır. Hesaplamamızda KDV dahil değildir, tahmini %5-10 eklemeniz önerilir.' },
              { q: 'Kaç günde inşaat tamamlanır?', a: '100 m² tek katlı betonarme ev için ortalama 4-6 ay, hava koşulları ve usta sayısına bağlı.' },
              { q: 'Ruhsat almak zorunlu mu?', a: 'Evet, Türkiye\'de tüm kalıcı yapılar için yapı ruhsatı zorunludur. Ruhsatsız yapı yıkım riskiyle karşılaşabilir.' },
            ].map((faq, i) => (
              <details key={i} className="border border-border rounded-xl overflow-hidden">
                <summary className="px-5 py-4 font-semibold text-sm cursor-pointer hover:bg-surface transition-colors">{faq.q}</summary>
                <div className="px-5 pb-4 text-sm text-muted">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mb-12">
          <div className="text-2xl mb-2">🏠</div>
          <h3 className="font-head font-extrabold text-xl mb-2">Projenize başlamaya hazır mısınız?</h3>
          <p className="text-gray-400 text-sm mb-6">Müstakit ile mimar, usta ve malzemecilere aracısız ulaşın.</p>
          <a href="/giris" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">Ücretsiz Kayıt Ol</a>
        </div>

        {/* Hesaplayıcı */}
        <MaliyetHesaplayici />

      </article>
    </main>
  )
}
