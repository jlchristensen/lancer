import Link from 'next/link';
import { bookingHref, bookingLabel, site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-white/55 px-5 py-3 shadow-[0_6px_24px_-14px_rgba(22,24,29,0.2)] ring-1 ring-white/50 backdrop-blur-xl lg:px-6">
        <Link
          href="/"
          className="font-heavy text-[17px] font-semibold tracking-tight text-paper"
        >
          {site.name}
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
          className="rounded-full bg-[#16181d] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          {bookingLabel}
        </a>
      </nav>
    </header>
  );
}
