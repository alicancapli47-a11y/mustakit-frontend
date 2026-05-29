import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Müstakit — Tekele değil, ustana güven',
  description: 'Müstakil ev yaptırmanın yeni yolu. Mimardan ustaya, malzemeciden tesisatçıya — tüm inşaat sürecini şeffaf, güvenli ve aracısız yönet.',
  keywords: 'müstakil ev, ev yaptırma, usta bul, mimar, inşaat, Türkiye',
  openGraph: {
    title: 'Müstakit',
    description: 'Tekele değil, ustana güven.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
              },
              success: {
                iconTheme: { primary: '#2E9E5B', secondary: 'white' },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
