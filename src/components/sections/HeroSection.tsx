import { bookingHref, bookingLabel, contactHref, site } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-700 uppercase">
            {site.wordmark}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            We build the software your business is missing.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Websites, products, and the internal tools behind them. Fixed
            scope, fixed price, and you own everything at the end.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={bookingHref}
              className="w-full rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
            >
              {bookingLabel}
            </a>
            <a
              href={contactHref}
              className="w-full rounded-full border border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
