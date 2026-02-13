'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()

  function handleLogout() {
    localStorage.removeItem('rider_hub_auth')
    router.push('/login')
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 p-6 md:fixed md:h-screen md:flex md:flex-col">
        <Link href="/" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold">
            RH
          </div>
          <span className="font-bold text-white text-lg">Rider Hub</span>
        </Link>

        <nav className="space-y-2 flex-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-medium transition-colors"
          >
            <span>📊</span>
            Dashboard
          </Link>
        </nav>

        <div className="border-t border-slate-800 pt-4 space-y-2">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm">
            ← Retour à l'accueil
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 transition-colors text-sm"
          >
            🚪 Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-6 md:p-8">
        {children}
      </main>
    </div>
  )
}

