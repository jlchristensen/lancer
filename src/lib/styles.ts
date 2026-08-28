/**
 * The two button shapes used across the site. Black primary on the pastel
 * ground, per the Polymer reference — deliberately not the default blue.
 */
export const btn =
  'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-300';

export const btnPrimary = `${btn} bg-[#16181d] text-white shadow-[0_10px_28px_-10px_rgba(22,24,29,0.5)] hover:bg-black`;

export const btnQuiet = `${btn} border border-line bg-white/70 text-paper backdrop-blur-sm hover:border-mute-dim hover:bg-white`;
