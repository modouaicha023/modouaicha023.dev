import { projects } from "@/constants";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    return NextResponse.json({ data: null });
  }

  return NextResponse.json(project);
}
