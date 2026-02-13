export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Marc D.',
      role: 'Rider - Paris',
      text: 'Rider Hub m\'a sauvé! Activé en 4 jours seulement. Le support était au top pour expliquer les documents.',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      role: 'Rider - Lyon',
      text: 'J\'ai pris le forfait Silver. Vraiment content du coaching perso. Gagne bien plus grâce aux conseils.',
      rating: 5,
    },
    {
      name: 'Tom C.',
      role: 'Rider - Marseille',
      text: 'KBIS en ligne? Hyper simple. Encore mieux que ce que je pensais. Merci Rider Hub!',
      rating: 5,
    },
    {
      name: 'Fatima Z.',
      role: 'Rider - Toulouse',
      text: 'Support 24/7 du Gold plan m\'a vraiment aidé pour les problèmes d\'activation. Garanti c\'est fou.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Rejoins 200+ riders satisfaits
          </h2>
          <p className="text-lg text-slate-400">
            Ils ont tous réussi leur activation. À ton tour!
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-emerald-400">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-4 text-sm italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-emerald-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Ils ont commencé avec Rider Hub. Et toi?
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
