import { SweepField } from './SweepField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

const tag = 'font-code text-[11px] tracking-[0.2em] text-ash uppercase';

/**
 * Option E "Instrument". Descended from C. A sweep turns behind the hero,
 * the shipped work sits in a readout panel, and amber is rationed to the
 * things that are actually live.
 */
export function OptionE() {
  return (
    <div className="min-h-screen bg-pitch font-sans text-bone">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ash-dim/30 bg-pitch/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="font-code text-sm tracking-[0.2em] text-bone uppercase">
            {site.name}
          </span>
          <div className="flex items-center gap-8">
            <span className={`${tag} hidden sm:block`}>
              {products.length} shipped
            </span>
            <a
              href={bookingHref}
              className="border border-sodium/60 px-5 py-2 font-code text-[11px] tracking-[0.14em] text-sodium uppercase transition-colors hover:bg-sodium hover:text-pitch"
            >
              {bookingLabel}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero with the sweep running behind the whole band. */}
        <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28">
          <SweepField className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch via-pitch/80 to-transparent" />

          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8">
            <div>
              <Reveal>
                <p className={tag}>{hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={110}>
                <h1 className="font-heavy mt-7 text-4xl leading-[0.98] font-extrabold tracking-[-0.03em] text-bone lg:text-7xl">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-ash">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={330}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={bookingHref}
                    className="bg-sodium px-8 py-4 text-center text-base font-semibold text-pitch transition-opacity hover:opacity-90"
                  >
                    {bookingLabel}
                  </a>
                  <a
                    href={contactHref}
                    className="border-b border-ash-dim pb-1 text-base text-ash transition-colors hover:border-sodium hover:text-sodium"
                  >
                    {site.email}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Readout panel. Bordered, not glassy. */}
            <Reveal delay={440}>
              <div className="border border-ash-dim/40 bg-pitch/70">
                <div className="flex items-center justify-between border-b border-ash-dim/40 px-5 py-3">
                  <span className={tag}>{sections.workHeading}</span>
                  <span className="flex items-center gap-2 font-code text-[11px] text-sodium">
                    <span className="h-1.5 w-1.5 bg-sodium" />
                    LIVE
                  </span>
                </div>
                <ul>
                  {products.map((product) => (
                    <li key={product.name} className="border-b border-ash-dim/25 last:border-b-0">
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline gap-4 px-5 py-4 transition-colors hover:bg-sodium/10"
                      >
                        <span className="font-medium text-bone">{product.name}</span>
                        <span className="h-px flex-1 border-b border-dotted border-ash-dim/50" />
                        <span className="font-code text-[11px] text-ash transition-colors group-hover:text-sodium">
                          {product.tagline}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services as a spec table. */}
        <section id="services" className="border-t border-ash-dim/30 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className={tag}>{sections.servicesHeading}</p>
              <h2 className="font-heavy mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                {sections.servicesSubhead}
              </h2>
            </Reveal>
            <div className="mt-14">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 90}>
                  <div className="group grid gap-3 border-t border-ash-dim/40 py-9 transition-colors hover:border-sodium/60 md:grid-cols-[5rem_minmax(0,18rem)_1fr] md:gap-10">
                    <span className="font-code text-[11px] text-sodium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-bone">
                      {service.title}
                    </h3>
                    <p className="text-ash">{service.description}</p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-ash-dim/40" />
            </div>
          </div>
        </section>

        {/* Process as a rail with ticks. */}
        <section className="border-t border-ash-dim/30 bg-pitch-2 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className={tag}>{sections.stepsHeading}</p>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <li className="relative pt-8">
                    <span className="absolute top-0 left-0 h-px w-full bg-ash-dim/40" />
                    <span className="absolute top-0 left-0 h-[3px] w-10 bg-sodium" />
                    <span className={tag}>Step {step.number}</span>
                    <h3 className="mt-3 text-2xl font-semibold text-bone">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-ash">{step.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing. */}
        <section className="border-t border-ash-dim/30 px-6 py-24 lg:px-8">
          <Reveal className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="font-heavy max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-6xl">
                {cta.heading}
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ash">{cta.body}</p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={bookingHref}
                className="bg-sodium px-8 py-4 text-center text-base font-semibold text-pitch transition-opacity hover:opacity-90"
              >
                {bookingLabel}
              </a>
              <a
                href={contactHref}
                className="border border-ash-dim/50 px-8 py-4 text-center text-base text-ash transition-colors hover:border-bone hover:text-bone"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-ash-dim/30 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className={tag}>{site.wordmark}</span>
          <span className="font-code text-[11px] text-ash-dim">
            Option E · Instrument
          </span>
        </div>
      </footer>
    </div>
  );
}
