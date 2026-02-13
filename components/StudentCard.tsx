'use client'

import { StatusBadge } from './StatusBadge'

interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  city: string
  status: string
  created_at: string
}

interface StudentCardProps {
  student: Student
  daysWaiting: number
  onRefresh: (id: string) => Promise<void>
  onDetails: (student: Student) => void
}

export function StudentCard({ student, daysWaiting, onRefresh, onDetails }: StudentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {student.first_name} {student.last_name}
          </h3>
          <p className="text-sm text-gray-500">{student.city}</p>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
          {student.first_name[0]}{student.last_name[0]}
        </div>
      </div>

      <div className="mb-3">
        <StatusBadge status={student.status} />
      </div>

      <div className="text-xs text-gray-600 mb-3">
        <p>Email: {student.email}</p>
        <p>Tél: {student.phone}</p>
        {daysWaiting > 0 && <p className="font-semibold text-orange-600 mt-1">{daysWaiting}j en attente</p>}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onDetails(student)}
          className="flex-1 px-3 py-2 text-sm bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
        >
          Détails
        </button>
        <button
          onClick={() => onRefresh(student.id)}
          className="flex-1 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          Relancer
        </button>
      </div>
    </div>
  )
}
