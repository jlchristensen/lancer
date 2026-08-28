import { Reveal } from '@/components/ui/Reveal';
import { DeviceShowcase } from '@/components/ui/DeviceShowcase';
import { FloatingCard } from '@/components/ui/FloatingCard';
import { bookingHref, bookingLabel, contactHref } from '@/lib/site';
import { btnPrimary, btnQuiet } from '@/lib/styles';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 lg:px-8 lg:pt-40">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <h1 className="font-heavy text-[2.5rem] leading-[1.08] font-normal tracking-[-0.02em] text-paper sm:text-6xl">
            {hero.headlineA}
            <br />
            <span className="text-mute">{hero.headlineB}</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mute">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={bookingHref} className={btnPrimary}>
              {bookingLabel}
            </a>
            <a href={contactHref} className={btnQuiet}>
              Send an email
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={360} className="relative z-10 mt-14 lg:mt-16">
        <div className="relative mx-auto max-w-4xl">
          <DeviceShowcase />

          <FloatingCard
            label="Live"
            value="learningwithsage.com"
            accent
            className="absolute -top-5 right-[7%] z-30 hidden lg:block"
          />
          <FloatingCard
            label="Built with"
            value="Next.js · Supabase · AWS"
            className="absolute -bottom-6 left-[15%] z-30 hidden lg:block"
          />
        </div>
      </Reveal>
    </section>
  );
}
