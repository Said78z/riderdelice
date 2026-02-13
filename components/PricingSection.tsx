export default function PricingPage() {
  const plans = [
    {
      name: 'Bronze',
      price: 799,
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
      name: 'Silver',
      price: 1199,
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
      name: 'Gold',
      price: 1499,
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tarifs transparents, résultats garantis
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choisissez le forfait adapté à vos besoins. Activation Deliveroo guarantie avec suivi professionnel.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.highlight
                  ? 'bg-gradient-to-b from-teal-900/30 to-slate-800 border-teal-500/50 ring-2 ring-teal-500/30 transform scale-105'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 font-bold rounded-full text-sm">
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
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlight
                    ? 'bg-teal-500 hover:bg-teal-600 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
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
