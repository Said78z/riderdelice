'use client'

import { useState } from 'react'

export default function PricingSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const plans = [
    {
      id: 'bronze',
      name: 'Bronze',
      price: 299,
      description: 'Parfait pour démarrer',
      features: [
        '✓ Création KBIS en ligne',
        '✓ Vérification documents légaux',
        '✓ Suivi activation Deliveroo',
        '✓ Support email',
        '⏱️ 10-15 jours délai',
      ],
      cta: 'Commencer',
      highlight: false,
    },
    {
      id: 'silver',
      name: 'Silver',
      price: 599,
      description: 'Recommandé (50% de nos clients)',
      features: [
        '✓ Tout du forfait Bronze',
        '✓ Documents légaux personnalisés',
        '✓ 1 appel coaching privé',
        '✓ Priorité modérée',
        '✓ 5-10 jours délai',
        '✓ Check-up mensuel',
      ],
      cta: 'Sélectionner',
      highlight: true,
    },
    {
      id: 'gold',
      name: 'Gold',
      price: 999,
      description: 'Pour les riders sérieux',
      features: [
        '✓ Tout du forfait Silver',
        '✓ Support prioritaire 24/7',
        '✓ Garantie activation 30j',
        '✓ Manager dédié',
        '✓ 3-5 jours délai',
        '✓ Formation Deliveroo complète',
      ],
      cta: 'Nous contacter',
      highlight: false,
    },
  ]

  async function handleCheckout(planId: string) {
    if (!email) {
      setMessage({ type: 'error', text: 'Veuillez entrer votre email' })
      return
    }

    setLoading(planId)
    setMessage(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, email }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Erreur lors de la création du paiement')
      }

      // Redirect to Stripe checkout
      window.location.href = data.url
    } catch (err) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Erreur lors du paiement',
      })
      setLoading(null)
    }
  }

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tarifs transparents, résultats garantis
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Choisissez le forfait adapté à vos besoins. Activation Deliveroo garantie avec suivi professionnel.
          </p>

          {/* Email input */}
          <div className="max-w-md mx-auto mb-12">
            <input
              type="email"
              placeholder="votre.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <p className="text-xs text-slate-500 mt-2">Entrez votre email pour payer</p>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`max-w-md mx-auto mb-8 p-4 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-b from-emerald-900/30 to-slate-800 border-emerald-500/50 ring-2 ring-emerald-500/30 transform scale-105'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold rounded-full text-sm">
                    PLUS POPULAIRE
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">€{plan.price}</span>
                <span className="text-slate-400 ml-2">HT</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-slate-300 text-sm">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleCheckout(plan.id)}
                disabled={loading === plan.id || !email}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.highlight
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {loading === plan.id ? '⏳ Redirection...' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Questions fréquentes</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700">
              <h4 className="font-semibold text-white mb-2">Incluez-vous les frais Deliveroo?</h4>
              <p className="text-slate-400 text-sm">
                Non, nos tarifs couvrent l'accompagnement et les démarches administratives. Les frais Deliveroo (commission, etc.) sont à côté.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700">
              <h4 className="font-semibold text-white mb-2">Que se passe-t-il si Deliveroo refuse l'inscription?</h4>
              <p className="text-slate-400 text-sm">
                Forfait Gold: nous garantissons une activation valide. Sinon, remboursement intégral.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700">
              <h4 className="font-semibold text-white mb-2">Pouvez-vous faire ça pour une entreprise entière?</h4>
              <p className="text-slate-400 text-sm">
                Oui! Tarifs en volume à partir de 5 inscrits. Contactez-nous pour un devis personnalisé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
