'use client'

import { Student } from '@/lib/types'

interface StatsCardsProps {
  students: Student[]
}

export function StatsCards({ students }: StatsCardsProps) {
  const totalStudents = students.length
  const activatedCount = students.filter((s) => s.status === 'activated').length

  const waitingOver21Days = students.filter((s) => {
    if (s.status !== 'waiting_activation') return false
    const created = new Date(s.created_at)
    const now = new Date()
    const daysDiff = Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))
    return daysDiff > 21
  }).length

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Students */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Total élèves</p>
        <p className="text-4xl font-bold text-white mt-3">{totalStudents}</p>
      </div>

      {/* Activated */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Activés</p>
        <div className="flex items-end gap-3 mt-3">
          <p className="text-4xl font-bold text-emerald-400">{activatedCount}</p>
          {totalStudents > 0 && (
            <p className="text-sm text-slate-400 pb-1">({Math.round((activatedCount / totalStudents) * 100)}%)</p>
          )}
        </div>
      </div>

      {/* Waiting >21 days */}
      <div className="p-6 rounded-xl bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">En attente &gt; 21j</p>
        <p className="text-4xl font-bold text-orange-400 mt-3">{waitingOver21Days}</p>
      </div>
    </div>
  )
}
