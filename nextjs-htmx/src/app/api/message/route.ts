import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('<p>HTMX updated this content!</p>', {
    headers: { 'Content-Type': 'text/html' },
  });
}
