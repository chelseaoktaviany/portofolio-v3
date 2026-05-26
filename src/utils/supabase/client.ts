import { createClient as createBrowserClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (typeof window !== "undefined" && (!supabaseUrl || !supabaseKey)) {
  // eslint-disable-next-line no-console
  console.error(
    "Supabase env missing: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is not set."
  );
}

export const createClient = () =>
  createBrowserClient(supabaseUrl!, supabaseKey!);
