import Link from 'next/link';
import { bookingHref, bookingLabel, site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="h-5 w-5 rounded-md bg-accent shadow-[0_0_18px_rgba(47,125,255,0.6)]" />
          <span className="font-heavy text-[15px] font-semibold tracking-tight text-paper">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-sm text-mute transition-colors hover:text-paper">
            Work
          </a>
          <a href="#services" className="text-sm text-mute transition-colors hover:text-paper">
            Services
          </a>
          <a href="#process" className="text-sm text-mute transition-colors hover:text-paper">
            Process
          </a>
        </div>

        <a
          href={bookingHref}
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
        >
          {bookingLabel}
        </a>
      </nav>
    </header>
  );
}
