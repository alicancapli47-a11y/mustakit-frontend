import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mustakit - Tekele degil, ustana guven',
  description: 'Mustakil ev yaptirmanin yeni yolu.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
