'use client'

const statusConfig: Record<string, { color: string; label: string }> = {
  new: { color: 'bg-blue-100 text-blue-800', label: 'Nouveau' },
  docs_pending: { color: 'bg-yellow-100 text-yellow-800', label: 'Docs en attente' },
  deliveroo_created: { color: 'bg-purple-100 text-purple-800', label: 'Créé Deliveroo' },
  waiting_activation: { color: 'bg-orange-100 text-orange-800', label: 'En attente activation' },
  activated: { color: 'bg-green-100 text-green-800', label: 'Activé' },
  inactive: { color: 'bg-gray-100 text-gray-800', label: 'Inactif' },
}

interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.new

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
      <span className="w-2 h-2 rounded-full mr-2 bg-current opacity-60"></span>
      {config.label}
    </span>
  )
}
