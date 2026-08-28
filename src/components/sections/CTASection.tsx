import { Reveal } from '@/components/ui/Reveal';
import { bookingHref, bookingLabel, contactHref, site } from '@/lib/site';
import { btnPrimary, btnQuiet } from '@/lib/styles';
import { cta } from '@/lib/content';

export function CTASection() {
  return (
    <section className="glow-hero relative overflow-hidden border-t border-line/60 px-6 py-28 lg:px-8 lg:py-36">
      <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-heavy text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-5xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-mute">{cta.body}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={bookingHref} className={btnPrimary}>
            {bookingLabel}
          </a>
          <a href={contactHref} className={btnQuiet}>
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
