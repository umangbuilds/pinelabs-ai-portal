import { promises as fs } from "fs";
import path from "path";

export type Submission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  team: string;
  type: string;
  title: string;
  description: string;
  tools: string[];
  repoUrl?: string;
  demoUrl?: string;
  status: "Submitted" | "Under review" | "Selected" | "Awarded";
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

export async function readSubmissions(): Promise<Submission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Submission[];
  } catch {
    return [];
  }
}

export async function addSubmission(
  s: Omit<Submission, "id" | "createdAt" | "status">
): Promise<Submission> {
  const all = await readSubmissions();
  const submission: Submission = {
    ...s,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "Submitted",
  };
  all.unshift(submission);
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf8");
  return submission;
}
