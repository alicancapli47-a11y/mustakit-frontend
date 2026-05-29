import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Müstakit — Tekele değil, ustana güven',
  description: 'Müstakil ev yaptırmanın yeni yolu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
