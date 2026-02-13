import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rider Hub - Webeska Formation',
  description: 'Rider onboarding tracking platform for Deliveroo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
