import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sanal Arsa ve İnşaat Proje Tanıtım Video Hizmeti | Müstakit",
  description: "Arsanız veya inşaat projeniz için profesyonel tanıtım videosu. Emlakçılar ve müteahhitler için 1-2 iş günü teslim. Müstakil ev yaptırmanın en şeffaf yolu.",
  keywords: "arsa tanıtım videosu, inşaat proje videosu, emlak videosu, müteahhit videosu, sanal tur, müstakil ev, ev yaptırma",
  openGraph: {
    title: "Sanal Arsa ve İnşaat Proje Tanıtım Video Hizmeti | Müstakit",
    description: "Arsanız veya inşaat projeniz için profesyonel tanıtım videosu.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
