import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'termdoc — a universal document viewer for the terminal',
  description:
    'Reads any document and renders it as well as the terminal allows. Streaming, Unicode-aware, graceful degradation. Linux · macOS · Windows. MIT OR Apache-2.0.',
  metadataBase: new URL('https://termdoc.app'),
  openGraph: {
    title: 'termdoc',
    description: 'A universal document viewer for the terminal',
    url: 'https://termdoc.app',
    type: 'website',
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
