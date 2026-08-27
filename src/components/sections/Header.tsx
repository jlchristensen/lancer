import Link from 'next/link';
import { bookingHref, bookingLabel, site } from '@/lib/site';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5 lg:px-8">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/8 bg-pitch/70 py-3 pr-3 pl-6 backdrop-blur-md">
        <Link
          href="/"
          className="font-heavy text-base font-extrabold tracking-tight text-bone"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="hidden text-sm text-ash transition-colors duration-300 hover:text-bone sm:block"
          >
            Work
          </a>
          <a
            href="#services"
            className="hidden text-sm text-ash transition-colors duration-300 hover:text-bone sm:block"
          >
            Services
          </a>
          <a
            href={bookingHref}
            className="rounded-full bg-bone px-6 py-2.5 text-sm font-semibold text-pitch transition-colors duration-300 hover:bg-white"
          >
            {bookingLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
