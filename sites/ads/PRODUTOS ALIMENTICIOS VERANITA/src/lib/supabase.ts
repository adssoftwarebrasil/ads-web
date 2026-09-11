import { createClient } from '@supabase/supabase-js';

// Chave "anon" publica do Supabase: ela ja vai embutida no JavaScript que o
// navegador baixa, entao nao e segredo. Ver NOTA-FONTE.md.
const SUPABASE_URL = 'https://mhxiichubzwnhgknyliy.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oeGlpY2h1Ynp3bmhna255bGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDI4NTksImV4cCI6MjA5Mjg3ODg1OX0.a99wAGHMnzn1YNBWmkk4qLPK4VXH58c4sREJA3ZNeBQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
