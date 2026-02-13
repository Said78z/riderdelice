import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rider Hub – Formation Deliveroo vélo',
  description: 'Plateforme pour suivre et accélérer l\'activation des comptes Deliveroo de vos élèves coursiers à vélo.',
  keywords: ['Deliveroo', 'formation', 'coursier', 'onboarding', 'suivi'],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
