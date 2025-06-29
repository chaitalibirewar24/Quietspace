import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zdslegqtyuqsmyhwxomz.supabase.co";   // 🟢 Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpkc2xlZ3F0eXVxc215aHd4b216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMTg3MTQsImV4cCI6MjA2Njc5NDcxNH0.B20XrJXdxE9eBRtv-NnGjxulQrY8LsSz8duu1PZN9AY";                  // Replace with your anon public API key

export const supabase = createClient(supabaseUrl, supabaseKey);
