import { contactHref, site } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <span className="font-display text-lg font-bold text-brand-600">
              {site.name}
            </span>
            <span className="ml-2 text-sm text-slate-500">
              {site.wordmark}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 md:items-end">
            <a
              href={contactHref}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {site.email}
            </a>
            <p className="text-sm text-slate-500">
              &copy; {currentYear} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
