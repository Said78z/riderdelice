'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-teal-900/50 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Prêt à accélérer ton onboarding ?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Accède au dashboard et commence à suivre tes élèves dès maintenant.
        </p>

        <Link
          href="/dashboard"
          className="inline-block px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors text-lg"
        >
          Accéder au dashboard →
        </Link>
      </div>
    </section>
  )
}
