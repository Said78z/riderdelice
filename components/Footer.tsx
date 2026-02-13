'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                RH
              </div>
              <span className="font-bold text-white">Rider Hub</span>
            </div>
            <p className="text-slate-400 text-sm">
              Plateforme de suivi d'onboarding Deliveroo pour centres de formation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-2">Liens</h3>
            <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
              Accueil
            </Link>
            <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors text-sm">
              Dashboard
            </Link>
            <Link href="/#features" className="text-slate-400 hover:text-white transition-colors text-sm">
              Fonctionnalités
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <a href="mailto:hello@riderhub.fr" className="text-slate-400 hover:text-white transition-colors text-sm">
              hello@riderhub.fr
            </a>
            <p className="text-slate-500 text-sm">Webeska Formation</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Rider Hub. Tous droits réservés.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <span className="text-slate-700">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
