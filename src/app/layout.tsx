import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Müstakit — Hayalinizdeki Müstakil Evi Yaptırmanın Güvenli Yolu',
  description: 'Müstakil ev yaptırmanın en güvenli ve şeffaf yolu. Mimar, usta ve malzemeciye aracısız ulaşın.',
  keywords: 'müstakil ev, ev yaptırma, usta bul, mimar, inşaat, Türkiye',
  openGraph: {
    title: 'Müstakit — Hayalinizdeki Müstakil Evi Yaptırmanın Güvenli Yolu',
    description: 'Müstakil ev yaptırmanın en güvenli ve şeffaf yolu.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}