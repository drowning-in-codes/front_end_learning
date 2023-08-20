import { createClient } from "@supabase/supabase-js";

// 创建subabase客户端
const supabaseUrl = "https://higvfwqjxsbsrfdemvzi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZ3Zmd3FqeHNic3JmZGVtdnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4MDc5MDMsImV4cCI6MjAwNzM4MzkwM30.wgCP10Lb4Um0YDbC-nCVhML_4porgA_JV97niKxRhQ8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
