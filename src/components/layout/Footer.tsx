import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="font-head font-extrabold text-xl text-primary mb-3">Müstakit</div>
            <p className="text-sm leading-relaxed">Tekele değil, ustana güven. Müstakil ev yaptırmanın en şeffaf yolu.</p>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-4">Platform</div>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/uzmanlar" className="hover:text-white transition-colors">Uzmanlar</Link></li>
              <li><Link href="/dukkan" className="hover:text-white transition-colors">Dükkan</Link></li>
              <li><Link href="/#paketler" className="hover:text-white transition-colors">Paketler</Link></li>
              <li><Link href="/#nasil-calisir" className="hover:text-white transition-colors">Nasıl Çalışır</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-4">Hukuki</div>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/uyelik-sozlesmesi" className="hover:text-white transition-colors">Üyelik Sözleşmesi</Link></li>
              <li><Link href="/cerez" className="hover:text-white transition-colors">Çerez Politikası</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white text-sm mb-4">İletişim</div>
            <ul className="flex flex-col gap-2 text-sm">
              <li>info@mustakit.com</li>
              <li>
                <a href="https://instagram.com/mustakit" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div>© 2025 Müstakit. Tüm hakları saklıdır.</div>
          <div>Türkiye'nin müstakil ev platformu 🏠</div>
        </div>
      </div>
    </footer>
  )
}
