import { NextRequest, NextResponse } from "next/server";
import { addSubmission, readSubmissions } from "@/lib/store";

export async function GET() {
  const submissions = await readSubmissions();
  return NextResponse.json(submissions);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const required = ["name", "email", "team", "type", "title", "description"] as const;
  for (const field of required) {
    if (typeof body[field] !== "string" || !(body[field] as string).trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const submission = await addSubmission({
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    team: (body.team as string).trim(),
    type: (body.type as string).trim(),
    title: (body.title as string).trim(),
    description: (body.description as string).trim(),
    tools: Array.isArray(body.tools) ? (body.tools as string[]).slice(0, 20) : [],
    repoUrl: typeof body.repoUrl === "string" ? body.repoUrl.trim() : undefined,
    demoUrl: typeof body.demoUrl === "string" ? body.demoUrl.trim() : undefined,
  });

  return NextResponse.json(submission, { status: 201 });
}
