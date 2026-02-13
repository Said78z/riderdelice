export default function AgencyServices() {
  const services = [
    {
      icon: '📋',
      title: 'Création KBIS',
      description: 'Dossier complet+ vérification légale. Fini les rejets administratifs.',
    },
    {
      icon: '✅',
      title: 'Vérification documents',
      description: 'On contrôle toutes les pièces avant envoi à Deliveroo. 0 risque.',
    },
    {
      icon: '🚀',
      title: 'Activation prioritaire',
      description: 'Contact direct Deliveroo. Activation garantie en 3-5 jours.',
    },
    {
      icon: '💰',
      title: 'Conseils financiers',
      description: 'Calcul gains, impôts, cotisations sociales. Comprendre ta marge.',
    },
    {
      icon: '🛴',
      title: 'Formation Deliveroo',
      description: 'Comment gagner plus, zones peak, stratégie de routing.',
    },
    {
      icon: '📞',
      title: 'Support 24/7 (Gold)',
      description: 'Manager dédié, aide technique, problèmes urgents résolus vite.',
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ce qu'on fait pour vous
          </h2>
          <p className="text-lg text-slate-400">
            Services complets d'accompagnement de A à Z. Aucune démarche administrative pour vous.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6">
            Intéressé? Consulte nos tarifs et choisissez le forfait adapté.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
          >
            Voir les forfaits →
          </a>
        </div>
      </div>
    </section>
  )
}
