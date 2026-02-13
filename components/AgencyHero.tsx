'use client'

import Link from 'next/link'

export default function AgencyHero() {
  return (
    <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-sm font-medium">
            🚀 Agence spécialisée Deliveroo - 200+ riders activés
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight">
          Deviens rider Deliveroo en 3 jours
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Documents KBIS, vérification légale, activation prioritaire. On gère tout. Tu roules.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/#pricing"
            className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors text-center"
          >
            Voir les tarifs →
          </Link>
          <Link
            href="/login"
            className="inline-block px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors text-center"
          >
            Espace admin
          </Link>
        </div>

        {/* Social proof */}
        <div className="grid grid-cols-3 gap-8 text-center py-12">
          <div>
            <p className="text-3xl font-bold text-emerald-400">200+</p>
            <p className="text-slate-400 text-sm">Riders activés</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">⭐ 4.9</p>
            <p className="text-slate-400 text-sm">Avis clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">3-5j</p>
            <p className="text-slate-400 text-sm">Délai moyen</p>
          </div>
        </div>

        {/* Mock screenshot */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl mt-16">
          <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 p-6 sm:p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-4">📱</p>
              <p className="text-slate-400">Tableau de bord en temps réel</p>
              <p className="text-slate-500 text-sm mt-2">Suivi des dossiers & activations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
