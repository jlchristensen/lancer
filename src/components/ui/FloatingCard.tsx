import type { ReactNode } from 'react';

/**
 * The small cards that overlap the hero devices.
 *
 * They carry facts only. The reference designs fill these with invented
 * numbers ("+24%", "99.9%") and that is not available to us: anything here
 * has to be true, so they say what a thing is, not how well it is doing.
 */
export function FloatingCard({
  label,
  value,
  accent = false,
  className = '',
}: {
  label: string;
  value: ReactNode;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-line bg-ink-2/90 px-4 py-3 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.9)] backdrop-blur-sm ${className}`}
    >
      <p className="font-heavy text-[10px] tracking-[0.16em] text-mute-dim uppercase">
        {label}
      </p>
      <p
        className={`mt-1 flex items-center gap-2 text-sm font-semibold ${
          accent ? 'text-accent-soft' : 'text-paper'
        }`}
      >
        {accent && (
          <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
        )}
        {value}
      </p>
    </div>
  );
}
