import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SB_URL = 'https://zllishknfqylpommgnew.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsbGlzaGtuZnF5bHBvbW1nbmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTk4MDksImV4cCI6MjA5MDk3NTgwOX0.Tm7ZGifcT5Y2kBJxaTUK_ASQruVcpHrM9UDMtmQiT4A';

export const supabase = createClient(SB_URL, SB_KEY);
