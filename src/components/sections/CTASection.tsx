import { bookingHref, bookingLabel, contactHref, site } from '@/lib/site';
import { cta } from '@/lib/content';

export function CTASection() {
  return (
    <section className="px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          {cta.heading}
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          {cta.body}
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
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
