import { Reveal } from '@/components/ui/Reveal';
import { DeviceShowcase } from '@/components/ui/DeviceShowcase';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { bookingHref, bookingLabel, contactHref, products } from '@/lib/site';
import { btnPrimary, btnQuiet } from '@/lib/styles';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="glow-hero relative overflow-hidden px-6 pt-32 pb-24 lg:px-8 lg:pt-40">
      <div className="grid-veil absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-4 py-1.5 text-[13px] text-mute transition-colors hover:border-accent/50 hover:text-paper"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            {products.length} products live and shipping
            <span aria-hidden="true" className="text-mute-dim">
              &rarr;
            </span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-heavy mt-8 text-[2.5rem] leading-[1.08] font-normal tracking-[-0.02em] text-paper sm:text-6xl">
            {hero.headlineA}
            <br />
            <span className="text-mute">{hero.headlineB}</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mute">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={bookingHref} className={btnPrimary}>
              {bookingLabel}
            </a>
            <a href={contactHref} className={btnQuiet}>
              Send an email
            </a>
          </div>
          <p className="mt-5 text-sm text-mute-dim">
            Fixed scope. Fixed price. You own everything at the end.
          </p>
        </Reveal>
      </div>

      <Reveal delay={480} className="relative z-10 mt-20 lg:mt-24">
        <div className="relative mx-auto max-w-4xl">
          <DeviceShowcase />

          <FloatingCard
            label="Live"
            value="playwithchip.com"
            accent
            className="absolute -top-6 right-0 hidden lg:block"
          />
          <FloatingCard
            label="Built with"
            value="Next.js · Supabase · AWS"
            className="absolute bottom-10 -left-10 hidden lg:block"
          />
        </div>
      </Reveal>
    </section>
  );
}
