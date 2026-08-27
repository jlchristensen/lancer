import { contactHref, site } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-ash-dim sm:flex-row">
        <span>{site.wordmark}</span>
        <div className="flex items-center gap-6">
          <a
            href={contactHref}
            className="transition-colors duration-300 hover:text-bone"
          >
            {site.email}
          </a>
          <span>
            &copy; {currentYear} {site.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
