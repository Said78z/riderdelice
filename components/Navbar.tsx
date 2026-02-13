'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold">
              RH
            </div>
            <span className="font-bold text-white hidden sm:inline">Rider Hub</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/#features"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Fonctionnalités
            </Link>
            <Link
              href="/#steps"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Comment ça marche
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors text-sm"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
