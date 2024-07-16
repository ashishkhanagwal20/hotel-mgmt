import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aibfjlutdblkmrgnsuxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpYmZqbHV0ZGJsa21yZ25zdXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDI5ODYsImV4cCI6MjAzNjYxODk4Nn0.i8wv-3GrRS7niISeNufjlbTUmjse6ZjC1fKk6DMbFUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
