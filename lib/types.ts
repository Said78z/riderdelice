export type StudentStatus = 'new' | 'docs_pending' | 'deliveroo_created' | 'waiting_activation' | 'activated' | 'inactive'

export interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  city: string
  status: StudentStatus
  created_at: string
}
