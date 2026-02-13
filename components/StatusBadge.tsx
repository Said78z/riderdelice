'use client'

import { StudentStatus } from '@/lib/types'

const statusConfig: Record<StudentStatus, { color: string; label: string; bg: string }> = {
  new: { color: 'text-sky-400', label: 'Nouveau', bg: 'bg-sky-500/10' },
  docs_pending: { color: 'text-amber-400', label: 'Documents', bg: 'bg-amber-500/10' },
  deliveroo_created: { color: 'text-purple-400', label: 'Créé Deliveroo', bg: 'bg-purple-500/10' },
  waiting_activation: { color: 'text-orange-400', label: 'En attente', bg: 'bg-orange-500/10' },
  activated: { color: 'text-emerald-400', label: 'Activé', bg: 'bg-emerald-500/10' },
  inactive: { color: 'text-slate-400', label: 'Inactif', bg: 'bg-slate-500/10' },
}

interface StatusBadgeProps {
  status: StudentStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.new

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${config.color} ${config.bg}`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${config.color}`}></span>
      {config.label}
    </span>
  )
}

