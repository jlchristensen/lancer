'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { bookingHref, bookingLabel, site } from '@/lib/site';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200 bg-white/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-brand-600"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
          >
            Work
          </a>
          <a
            href="#services"
            className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:block"
          >
            Services
          </a>
          <a
            href={bookingHref}
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            {bookingLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
