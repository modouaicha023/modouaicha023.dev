import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  try {
    const content = await fs.readFile(filePath, "utf8");
    return NextResponse.json({ content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Fichier non trouvé" }, { status: 404 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;
  const { content } = await request.json();
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  try {
    await fs.writeFile(filePath, content, "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
      { status: 500 }
    );
  }
}
