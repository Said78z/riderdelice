export default function Steps() {
  const steps = [
    {
      number: '1',
      title: 'Crée tes élèves',
      description: 'Ajoute tes coursiers à vélo dans le dashboard. Prénom, nom, email, ville.',
    },
    {
      number: '2',
      title: 'Suis leur progression',
      description: 'Visualise les étapes : inscription, documents, activation Deliveroo.',
    },
    {
      number: '3',
      title: 'Relance les retardataires',
      description: 'Identifie qui attend depuis 21+ jours et accélère leur activation.',
    },
  ]

  return (
    <section id="steps" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comment ça marche
          </h2>
          <p className="text-lg text-slate-400">
            3 étapes simples pour optimiser l'onboarding de tes élèves.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step card */}
              <div className="bg-slate-900 rounded-xl p-8 border border-slate-700 relative z-10">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>

              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-transparent z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
