// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ncstznhgekpvljquamwc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jc3R6bmhnZWtwdmxqcXVhbXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMTczODMsImV4cCI6MjA2MTc5MzM4M30.I4A19pJ07Pz6Dt_grCn401jZ1vRhcjFq66wuJ9E8yxc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);