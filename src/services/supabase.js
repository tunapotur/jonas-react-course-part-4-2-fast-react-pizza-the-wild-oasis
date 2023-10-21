import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahfisdjirenyphqwbwwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZmlzZGppcmVueXBocXdid3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4NTQ4ODYsImV4cCI6MjAxMzQzMDg4Nn0.66YAb1PCHPiU8Qytl6uMbEdXR53cPFm0M7ZeMmW9xyw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
