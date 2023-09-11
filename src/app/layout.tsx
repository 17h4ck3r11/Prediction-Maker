import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prediction Maker',
  description: 'Used to make predictions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
