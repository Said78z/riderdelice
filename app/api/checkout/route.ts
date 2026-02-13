import { NextRequest, NextResponse } from 'next/server'

const STRIPE_API_BASE = 'https://api.stripe.com/v1'
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY

// Plan mapping
const PLANS = {
  bronze: {
    name: 'Bronze - Création KBIS',
    amount: 79900, // €799.00
    description: 'Création KBIS + suivi activation Deliveroo',
  },
  silver: {
    name: 'Silver - Accompagnement complet',
    amount: 119900, // €1199.00
    description: 'KBIS + documents + 1 appel coaching',
  },
  gold: {
    name: 'Gold - Support prioritaire',
    amount: 149900, // €1499.00
    description: 'Tout + support 24/7 + garantie activation 30j',
  },
}

export async function POST(request: NextRequest) {
  try {
    const { plan, email } = await request.json()

    if (!plan || !PLANS[plan as keyof typeof PLANS]) {
      return NextResponse.json({ error: 'Plan invalide' }, { status: 400 })
    }

    const planData = PLANS[plan as keyof typeof PLANS]

    // Create Stripe checkout session
    const params = new URLSearchParams({
      'line_items[0][price_data][currency]': 'eur',
      'line_items[0][price_data][product_data][name]': planData.name,
      'line_items[0][price_data][product_data][description]': planData.description,
      'line_items[0][price_data][unit_amount]': planData.amount.toString(),
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'success_url': `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      'cancel_url': `${request.nextUrl.origin}`,
      'customer_email': email || '',
    })

    const response = await fetch(`${STRIPE_API_BASE}/checkout/sessions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: `Stripe error: ${error.error?.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    const session = await response.json()
    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json(
      { error: 'Erreur serveur lors de la création du paiement' },
      { status: 500 }
    )
  }
}
