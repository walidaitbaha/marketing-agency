import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  // Simulate sending — demo only
  console.log("New enquiry:", { name, email, phone, service, message });

  return NextResponse.json({ success: true });
}