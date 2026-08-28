import { Reveal } from '@/components/ui/Reveal';
import { DeviceShowcase } from '@/components/ui/DeviceShowcase';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { bookingHref, bookingLabel, contactHref, products } from '@/lib/site';
import { btnPrimary, btnQuiet } from '@/lib/styles';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="glow-hero relative overflow-hidden px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
      <div className="grid-veil absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-4 py-1.5 text-xs text-mute transition-colors hover:border-accent/50 hover:text-paper"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
            {products.length} products live and shipping
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-heavy mt-8 text-[2.5rem] leading-[1.06] font-normal tracking-[-0.02em] text-paper sm:text-6xl">
            {hero.headline}
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

      {/* The work itself, as the proof */}
      <Reveal delay={480} className="relative z-10 mt-16 lg:mt-20">
        <div className="relative mx-auto max-w-5xl">
          <DeviceShowcase />

          <FloatingCard
            label="Live"
            value="playwithchip.com"
            accent
            className="absolute -top-4 right-2 hidden lg:block"
          />
          <FloatingCard
            label="Built with"
            value="Next.js · Supabase · AWS"
            className="absolute bottom-8 -left-6 hidden lg:block"
          />
        </div>
      </Reveal>
    </section>
  );
}
