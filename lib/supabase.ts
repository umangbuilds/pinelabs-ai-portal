import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured ? createClient(url!, anonKey!) : null;

export type Submission = {
  id: string;
  created_at: string;
  name: string;
  team_name: string;
  team_function: string;
  track: string;
  type: string;
  title: string;
  tagline: string;
  problem: string;
  description: string;
  tools: string[];
  repo_url: string | null;
  demo_url: string | null;
  video_url: string | null;
  license: string | null;
  status: "Submitted" | "Under review" | "Selected" | "Awarded";
};
