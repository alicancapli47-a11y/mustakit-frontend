import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mustakit - Tekele degil, ustana guven',
description: 'Müstakil evinizi yaptırmanın en şeffaf yolu. Mimar, usta ve malzemeciye aracısız ulaşın.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
