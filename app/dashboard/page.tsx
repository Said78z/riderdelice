'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardLayout } from '@/components/DashboardLayout'
import { StatsCards } from '@/components/StatsCards'
import { StudentsTable } from '@/components/StudentsTable'
import { Student, StudentStatus } from '@/lib/types'

export default function Dashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Check auth on mount
  useEffect(() => {
    const isAuth = localStorage.getItem('rider_hub_auth') === 'true'
    if (!isAuth) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
      fetchStudents()
    }
  }, [router])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <p className="text-slate-400">Redirection...</p>
      </div>
    )
  }

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

    try {
      const res = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Erreur lors de la création')

      setMessage({ type: 'success', text: 'Élève créé avec succès!' })
      setFormData({ first_name: '', last_name: '', email: '', phone: '', city: '' })
      setShowForm(false)
      await fetchStudents()
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors de la création de l\'élève' })
    }
  }

  async function handleRefresh(studentId: string) {
    try {
      const nextStatuses: Record<StudentStatus, StudentStatus> = {
        new: 'docs_pending',
        docs_pending: 'deliveroo_created',
        deliveroo_created: 'waiting_activation',
        waiting_activation: 'activated',
        activated: 'activated',
        inactive: 'new',
      }

      const student = students.find((s) => s.id === studentId)
      if (!student) return

      const nextStatus = nextStatuses[student.status]

      const res = await fetch(`/api/students/${studentId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      })

      if (!res.ok) throw new Error('Erreur lors de la mise à jour')

      setMessage({ type: 'success', text: 'Statut mis à jour!' })
      await fetchStudents()
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour' })
    }
  }

  async function handleDelete(studentId: string) {
    if (!confirm('Supprimer cet élève ?')) return

    try {
      // Pour cette version, on simule juste une suppression locale
      setStudents(students.filter((s) => s.id !== studentId))
      setMessage({ type: 'success', text: 'Élève supprimé' })
    } catch (err) {
      setMessage({ type: 'error', text: 'Erreur lors de la suppression' })
    }
  }

  return (
    <DashboardLayout>
      {/* Message Toast */}
      {message && (
        <div
          className={`fixed top-20 right-4 px-6 py-3 rounded-lg shadow-lg text-white font-semibold z-50 ${
            message.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
          }`}
          onClick={() => setMessage(null)}
        >
          {message.text}
        </div>
      )}

      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard élèves</h1>
          <p className="text-slate-400 mt-2">Suivi des inscriptions et activations Deliveroo</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors self-start sm:self-auto"
        >
          {showForm ? '✕ Fermer' : '+ Nouvel élève'}
        </button>
      </div>

      {/* Add Student Form */}
      {showForm && (
        <div className="mb-8 p-6 rounded-xl bg-slate-800 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Ajouter un élève</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Prénom"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                required
                className="px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <input
                type="text"
                placeholder="Nom"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                required
                className="px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
              <input
                type="text"
                placeholder="Ville"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg placeholder-slate-500 focus:outline-none focus:border-teal-500 md:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-colors w-full md:w-auto"
            >
              Créer l'élève
            </button>
          </form>
        </div>
      )}

      {/* Stats */}
      <div className="mb-8">
        <StatsCards students={students} />
      </div>

      {/* Students Table */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-slate-400 text-lg">Chargement...</p>
          </div>
        ) : (
          <StudentsTable
            students={students}
            onRefresh={handleRefresh}
            onDelete={handleDelete}
          />
        )}
      </div>
    </DashboardLayout>
  )
}
