import { contactHref, products, site } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line/60 px-6 pt-16 pb-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-heavy text-[17px] font-semibold tracking-tight text-paper">
              {site.name}
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute-dim">
              {site.wordmark}. Website optimization and AI implementation for
              businesses.
            </p>
          </div>

          <div>
            <p className="font-heavy text-[11px] tracking-[0.16em] text-mute-dim uppercase">
              Built by Lancer
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mute transition-colors hover:text-paper"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heavy text-[11px] tracking-[0.16em] text-mute-dim uppercase">
              Get in touch
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={contactHref}
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-mute transition-colors hover:text-paper">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-mute transition-colors hover:text-paper">
                  Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line/60 pt-6">
          <p className="text-sm text-mute-dim">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
