import {NextResponse} from 'next/server'

import {handler} from '@/app/actions'

export async function POST(request) {
  try {
    const data = await request.json()
    const result = await handler({
      name: data?.name,
      phoneNumber: data?.phoneNumber || data?.phone,
      email: data?.email,
      carLink: data?.carLink,
      message: data?.message,
    })

    return NextResponse.json(result, {status: result.ok ? 200 : 502})
  } catch (error) {
    console.error('[contact-form] Invalid API request', error)
    return NextResponse.json(
      {ok: false, error: 'Invalid request'},
      {status: 400},
    )
  }
}
