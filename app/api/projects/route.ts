import { projects } from "@/constants";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ projects });
}
