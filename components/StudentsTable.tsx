'use client'

import { Student } from '@/lib/types'
import { StatusBadge } from './StatusBadge'

interface StudentsTableProps {
  students: Student[]
  onRefresh: (id: string) => void
  onDelete: (id: string) => void
}

export function StudentsTable({ students, onRefresh, onDelete }: StudentsTableProps) {
  const calculateDaysWaiting = (createdAt: string): number => {
    const created = new Date(createdAt)
    const now = new Date()
    return Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))
  }

  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-12 text-center">
        <p className="text-slate-400 text-lg">Aucun élève pour le moment.</p>
        <p className="text-slate-500 text-sm mt-2">Crée ton premier élève pour commencer!</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800">
              <th className="px-6 py-4 text-left font-semibold text-slate-300">Nom</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-300">Email</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-300">Ville</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-300">Statut</th>
              <th className="px-6 py-4 text-left font-semibold text-slate-300">Jours</th>
              <th className="px-6 py-4 text-right font-semibold text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              const daysWaiting = calculateDaysWaiting(student.created_at)
              return (
                <tr key={student.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    {student.first_name} {student.last_name}
                  </td>
                  <td className="px-6 py-4 text-slate-400">{student.email}</td>
                  <td className="px-6 py-4 text-slate-400">{student.city}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={student.status} />
                  </td>
                  <td className="px-6 py-4 text-slate-400">{daysWaiting}j</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onRefresh(student.id)}
                        className="px-3 py-1 rounded text-xs font-medium bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors"
                      >
                        Relancer
                      </button>
                      <button
                        onClick={() => onDelete(student.id)}
                        className="px-3 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden divide-y divide-slate-700">
        {students.map((student) => {
          const daysWaiting = calculateDaysWaiting(student.created_at)
          return (
            <div key={student.id} className="p-4 hover:bg-slate-800/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-medium text-white">
                    {student.first_name} {student.last_name}
                  </p>
                  <p className="text-sm text-slate-400">{student.city}</p>
                </div>
                <StatusBadge status={student.status} />
              </div>
              <p className="text-sm text-slate-400 mb-3">{student.email}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-slate-500">{daysWaiting}j d'attente</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onRefresh(student.id)}
                  className="flex-1 px-2 py-2 rounded text-xs font-medium bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors"
                >
                  Relancer
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="flex-1 px-2 py-2 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                >
                  Supprimer
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
