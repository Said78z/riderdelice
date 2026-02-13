# Rider Hub - Deliveroo Onboarding SaaS

Ultra-simple Next.js dashboard for tracking Deliveroo rider onboarding for Webeska Formation students.

## Quick Start

### 1. Setup Supabase
- Create account at [supabase.com](https://supabase.com)
- Create new project
- Go to SQL Editor and execute the database schema (tables: centers, students, documents, events)
- Get your API URL and Anon Key from Settings → API

### 2. Environment Variables
```bash
cp .env.local.example .env.local
```

Add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Install & Run
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Features
- 📊 Dashboard with 3 stats cards (Total, Activated, Waiting >21j)
- ➕ Quick student creation form
- 🎯 Student cards with status badges
- 🔄 Update status with "Relancer" button
- 📱 Fully responsive mobile UI
- 🎨 Teal/blue gradient design

## Student Statuses
- `new` - Nouveau
- `docs_pending` - Docs en attente
- `deliveroo_created` - Créé Deliveroo
- `waiting_activation` - En attente activation
- `activated` - Activé
- `inactive` - Inactif

## Deploy
```bash
vercel --prod
```

Or use Vercel Dashboard for 1-click deploy.
