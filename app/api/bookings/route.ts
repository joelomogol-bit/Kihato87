 import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, service, date, time, notes } = body

    // Fallback for 'service' if it is missing from the incoming form payload
    const serviceValue = service || 'General Appointment Focus'

    // Insert the booking data into our cloud Supabase table without forcing a read back
    const { error } = await supabase
      .from('bookings')
      .insert([{ 
        name, 
        phone, 
        service: serviceValue, 
        date, 
        time, 
        notes 
      }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
