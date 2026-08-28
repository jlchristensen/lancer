import type { ReactNode } from 'react';

/**
 * The small status cards that overlap the hero devices.
 *
 * Facts only. The reference designs fill these with invented numbers
 * ("+24%", "99.9%") and that is not available to us: anything here has to
 * be true, so they say what a thing is, never how well it is doing.
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
      className={`rounded-xl bg-gradient-to-b from-[#2c3852] to-[#131c30] p-px shadow-[0_24px_50px_-16px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="rounded-[calc(0.75rem-1px)] bg-ink-2/95 px-4 py-3 backdrop-blur-sm">
        <p className="font-heavy text-[10px] font-semibold tracking-[0.16em] text-mute-dim uppercase">
          {label}
        </p>
        <p
          className={`mt-1 flex items-center gap-2 text-[13px] font-semibold ${
            accent ? 'text-accent-soft' : 'text-paper'
          }`}
        >
          {accent && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
            </span>
          )}
          {value}
        </p>
      </div>
    </div>
  );
}
