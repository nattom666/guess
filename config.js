// GitHub Pages 版の設定。Supabase の Project URL と anon public key を入れる。
// どちらもブラウザから使う前提の公開用の値（書き込みは supabase/schema.sql の設定で「追加のみ」に制限）。
// 空のままでもゲームは遊べる（学習データは使わない）。
const UMARE_CONFIG = {
  supabaseUrl: "https://equoxzsfbudcmbqfctax.supabase.co",
  supabaseAnonKey: "sb_publishable_nCOeX-j01X6YoegK6gBUBA_UzwHnMCp",
};
