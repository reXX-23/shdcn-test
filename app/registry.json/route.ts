import { NextResponse } from 'next/server';
import registryData from '@/registry.json';

export async function GET() {
  return NextResponse.json(registryData, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
