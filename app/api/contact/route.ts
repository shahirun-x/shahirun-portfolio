import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming request body
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Server-side validation (basic)
    if (!name || !email || !message) {
      return new NextResponse(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Log the data (this is where you would send an email)
    // For now, this log will appear in your Vercel functions log
    console.log('--- NEW CONTACT FORM SUBMISSION ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('-------------------------------------');

    // 4. Send a success response back to the client
    return new NextResponse(
      JSON.stringify({ message: 'Form submitted successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    // 5. Handle any errors
    console.error('Error in contact API:', error);
    return new NextResponse(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}