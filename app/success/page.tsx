'use client'

import Link from 'next/link'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id') || ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-white mb-3">Paiement réussi!</h1>
        <p className="text-slate-300 mb-2">Votre forfait a été activé avec succès.</p>
        <p className="text-slate-400 text-sm mb-8">Vous recevrez un email de confirmation avec les prochaines étapes.</p>

        {sessionId && (
          <p className="text-xs text-slate-500 mb-8">Session ID: {sessionId.slice(0, 20)}...</p>
        )}

        <div className="space-y-3">
          <Link
            href="/"
            className="block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
          >
            Retour à l'accueil →
          </Link>
          <Link
            href="/login"
            className="block px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors"
          >
            Espace admin
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <SuccessContent />
    </Suspense>
  )
}
