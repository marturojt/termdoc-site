import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'termdoc — a universal document viewer for the terminal',
  description:
    'Reads any document and renders it as well as the terminal allows. Streaming, Unicode-aware, graceful degradation. Linux · macOS · Windows. MIT OR Apache-2.0.',
  // Vercel serves www as canonical and 308s the apex to it, so this must be www:
  // declaring the apex would point every OpenGraph URL at a redirect.
  metadataBase: new URL('https://www.termdoc.app'),
  alternates: { canonical: 'https://www.termdoc.app' },
  openGraph: {
    title: 'termdoc',
    description: 'A universal document viewer for the terminal',
    url: 'https://www.termdoc.app',
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
