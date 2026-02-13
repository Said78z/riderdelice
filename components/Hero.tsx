'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-full text-sm font-medium">
            🚴 Plateforme de formation Deliveroo
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-6 leading-tight">
          Centralise l'onboarding Deliveroo de tes élèves
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Suivi en temps réel des étapes d'inscription, visibilité sur les délais d'activation, moins de stress pour tes élèves coursiers à vélo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/dashboard"
            className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors text-center"
          >
            Accéder au dashboard →
          </Link>
          <Link
            href="#steps"
            className="inline-block px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors text-center"
          >
            Découvrir comment ça marche
          </Link>
        </div>

        {/* Hero Image / Screenshot mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
          {/* Fake dashboard screenshot */}
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8">
            <div className="space-y-4">
              {/* Header mockup */}
              <div className="flex justify-between items-center">
                <div className="h-8 bg-slate-700 rounded w-32"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-slate-700 rounded w-24"></div>
                  <div className="h-8 bg-teal-500/20 rounded w-24"></div>
                </div>
              </div>

              {/* Stats mockup */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="h-24 bg-slate-800 rounded-lg border border-slate-700"></div>
                <div className="h-24 bg-slate-800 rounded-lg border border-slate-700"></div>
                <div className="h-24 bg-slate-800 rounded-lg border border-slate-700"></div>
              </div>

              {/* Table mockup */}
              <div className="mt-6 space-y-2">
                <div className="h-10 bg-slate-800 rounded w-full"></div>
                <div className="h-10 bg-slate-700 rounded w-full"></div>
                <div className="h-10 bg-slate-700 rounded w-full"></div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
