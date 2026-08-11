import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'termdoc — view documents without leaving the terminal',
  // Not "reads any document": this string is what search results and link previews
  // show, which is the worst place for a claim the tool cannot yet honour.
  description:
    'A fast, terminal-native document viewer written in Rust. Markdown, plain text and logs render today; more formats land milestone by milestone. Streaming, Unicode-aware, correct in pipes. Linux · macOS · Windows.',
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
