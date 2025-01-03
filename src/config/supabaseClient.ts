// This code is based on the Supabase documentation and a tutorial from YouTube.
// See the official Supabase documentation: https://supabase.com/docs/reference/javascript/initializing
// Also, check out this helpful YouTube tutorial: https://www.youtube.com/watch?v=Gz9bvYybaws&list=PL4cUxeGkcC9hUb6sHthUEwG7r9VDPBMKO&index=2

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
