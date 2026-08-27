import { Reveal } from '@/components/ui/Reveal';
import { SilkField } from '@/components/ui/SilkField';
import { bookingHref, bookingLabel, contactHref, site } from '@/lib/site';
import { pillPrimary, pillQuiet } from '@/lib/styles';
import { cta } from '@/lib/content';

export function CTASection() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-8">
      <SilkField className="absolute inset-0 h-full w-full opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/70 to-pitch/40" />

      <Reveal className="relative mx-auto max-w-5xl">
        <h2 className="font-heavy max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-6xl">
          {cta.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-ash">{cta.body}</p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a href={bookingHref} className={pillPrimary}>
            {bookingLabel}
          </a>
          <a href={contactHref} className={pillQuiet}>
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
