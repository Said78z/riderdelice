export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Suivi en temps réel',
      description: 'Visualise instantanément où en est chaque élève dans son parcours d\'activation Deliveroo.',
    },
    {
      icon: '✅',
      title: 'Statuts clairs',
      description: 'Nouveau, Documents, En attente Deliveroo, Activé. Chacun sait où il en est.',
    },
    {
      icon: '🚀',
      title: 'Relances organisées',
      description: 'Identifie rapidement qui attend depuis plus de 21 jours et relance-les.',
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Les fonctionnalités clés
          </h2>
          <p className="text-lg text-slate-400">
            Tout ce dont tu as besoin pour gérer efficacement tes élèves.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
