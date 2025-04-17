import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PrimecoZ',
  description: 'Created for PrimeCoz',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/PrimecoZ_logo.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
