'use client'

import { useEffect, useState } from 'react'
import { StatusBadge } from '@/components/StatusBadge'
import { StudentCard } from '@/components/StudentCard'

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

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [view, setView] = useState<'dashboard' | 'form' | 'detail'>('dashboard')

  useEffect(() => {
    fetchStudents()
  }, [])

  async function fetchStudents() {
    try {
      setLoading(true)
      const res = await fetch('/api/students')
      const data = await res.json()
      setStudents(data.students || [])
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors du chargement des élèves' })
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to create student')
      }

      setMessage({ type: 'success', text: 'Élève créé avec succès!' })
      setFormData({ first_name: '', last_name: '', email: '', phone: '', city: '' })
      setView('dashboard')
      await fetchStudents()
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors de la création de l\'élève' })
    } finally {
      setSubmitting(false)
    }
  }

  async function handleRefresh(studentId: string) {
    try {
      const nextStatuses: Record<string, string> = {
        new: 'docs_pending',
        docs_pending: 'deliveroo_created',
        deliveroo_created: 'waiting_activation',
        waiting_activation: 'activated',
        activated: 'activated',
        inactive: 'new',
      }

      const student = students.find((s) => s.id === studentId)
      if (!student) return

      const nextStatus = nextStatuses[student.status] || 'new'

      const res = await fetch(`/api/students/${studentId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      })

      if (!res.ok) throw new Error('Failed to update status')

      setMessage({ type: 'success', text: 'Statut relancé!' })
      await fetchStudents()
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour' })
    }
  }

  function calculateDaysWaiting(createdAt: string): number {
    const created = new Date(createdAt)
    const now = new Date()
    const diff = now.getTime() - created.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }

  const activatedCount = students.filter((s) => s.status === 'activated').length
  const waitingOver21Days = students.filter((s) => {
    return s.status === 'waiting_activation' && calculateDaysWaiting(s.created_at) > 21
  }).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-teal-600">🚴 Rider Hub</h1>
              <p className="text-gray-600 mt-1">Webeska Formation - Deliveroo Onboarding</p>
            </div>
            <button
              onClick={() => setView(view === 'form' ? 'dashboard' : 'form')}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-colors"
            >
              {view === 'form' ? '← Retour' : '+ Nouvel élève'}
            </button>
          </div>
        </div>
      </header>

      {/* Message Toast */}
      {message && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-semibold ${
            message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message.text}
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {view === 'form' ? (
          // Form View
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Créer un nouvel élève</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Prénom"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <input
                  type="text"
                  placeholder="Ville"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 md:col-span-2"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-4 py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
              >
                {submitting ? 'Création en cours...' : 'Créer l\'élève'}
              </button>
            </form>
          </div>
        ) : view === 'detail' && selectedStudent ? (
          // Detail View
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <button
              onClick={() => setView('dashboard')}
              className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors"
            >
              ← Retour au dashboard
            </button>
            <div className="flex gap-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
                {selectedStudent.first_name[0]}
                {selectedStudent.last_name[0]}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedStudent.first_name} {selectedStudent.last_name}
                </h2>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> {selectedStudent.email}
                  </p>
                  <p>
                    <strong>Téléphone:</strong> {selectedStudent.phone}
                  </p>
                  <p>
                    <strong>Ville:</strong> {selectedStudent.city}
                  </p>
                  <p>
                    <strong>Date d\'inscription:</strong>{' '}
                    {new Date(selectedStudent.created_at).toLocaleDateString('fr-FR')}
                  </p>
                  <p className="mt-2">
                    <strong>Statut:</strong> <StatusBadge status={selectedStudent.status} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Dashboard View
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-sm font-semibold">Total élèves</p>
                <p className="text-4xl font-bold text-teal-600 mt-2">{students.length}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-sm font-semibold">Activés</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{activatedCount}</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 text-sm font-semibold">En attente &gt; 21j</p>
                <p className="text-4xl font-bold text-orange-600 mt-2">{waitingOver21Days}</p>
              </div>
            </div>

            {/* Students Grid */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <p className="text-gray-600 text-lg">Chargement des élèves...</p>
              </div>
            ) : students.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 text-lg">Aucun élève encore. Créez-en un pour commencer!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    daysWaiting={calculateDaysWaiting(student.created_at)}
                    onRefresh={handleRefresh}
                    onDetails={(s) => {
                      setSelectedStudent(s)
                      setView('detail')
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
