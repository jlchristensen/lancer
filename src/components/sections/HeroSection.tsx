import { Reveal } from '@/components/ui/Reveal';
import { SilkField } from '@/components/ui/SilkField';
import { bookingHref, bookingLabel, contactHref, site } from '@/lib/site';
import { pillPrimary, pillQuiet } from '@/lib/styles';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 lg:px-8">
      <SilkField className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-pitch via-pitch/70 to-pitch/20" />

      <div className="relative mx-auto w-full max-w-5xl pt-24">
        <Reveal>
          <p className="text-sm tracking-wide text-ash">{site.wordmark}</p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="font-heavy mt-7 max-w-3xl text-[2.6rem] leading-[1.03] font-extrabold tracking-[-0.03em] text-bone sm:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ash">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href={bookingHref} className={pillPrimary}>
              {bookingLabel}
            </a>
            <a href={contactHref} className={pillQuiet}>
              Send an email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
