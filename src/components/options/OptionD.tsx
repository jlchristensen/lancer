import { RidgeField } from './RidgeField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

/**
 * Option D "Ridge". Descended from A. No colour anywhere, no rounded
 * corners, no cards. Ridgelines climb behind the type and rows invert on
 * hover instead of lifting on a shadow.
 */
export function OptionD() {
  return (
    <div className="min-h-screen bg-pitch font-sans text-bone">
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <span className="font-heavy text-lg font-extrabold tracking-tight text-white">
            {site.name}
          </span>
          <a
            href={bookingHref}
            className="border-b border-white pb-1 text-sm font-medium text-white"
          >
            {bookingLabel}
          </a>
        </nav>
      </header>

      <main>
        {/* Hero. The ridges run the full height behind everything. */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden">
          <RidgeField className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-pitch via-pitch/85 to-transparent" />

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
            <Reveal>
              <p className="max-w-xs text-sm leading-relaxed text-ash">
                {site.wordmark}. A software studio, and the shop behind the
                apps below.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-heavy mt-10 max-w-4xl text-[2.6rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-bone sm:text-6xl lg:text-8xl">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <a
                  href={bookingHref}
                  className="bg-bone px-9 py-4 text-base font-semibold text-pitch transition-colors hover:bg-white"
                >
                  {bookingLabel}
                </a>
                <a
                  href={contactHref}
                  className="border-b border-ash-dim pb-1 text-base text-ash transition-colors hover:border-bone hover:text-bone"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Work. Each row inverts on hover. */}
        <section id="work" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-code text-xs tracking-[0.2em] text-ash uppercase">
                {sections.workHeading}
              </h2>
            </Reveal>
            <div className="mt-10 border-t border-ash-dim/40">
              {products.map((product, index) => (
                <Reveal key={product.name} delay={index * 80}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 border-b border-ash-dim/40 px-4 py-10 transition-colors hover:bg-bone md:grid-cols-[4rem_1fr_minmax(0,26rem)] md:items-baseline md:gap-10"
                  >
                    <span className="font-code text-xs text-ash transition-colors group-hover:text-pitch">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="font-heavy block text-3xl font-extrabold tracking-tight text-bone transition-colors group-hover:text-pitch lg:text-5xl">
                        {product.name}
                      </span>
                      <span className="mt-2 block text-sm text-ash transition-colors group-hover:text-pitch/70">
                        {product.tagline}
                      </span>
                    </span>
                    <span className="text-ash transition-colors group-hover:text-pitch/80">
                      {product.description}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services, split by hairlines rather than boxed into cards. */}
        <section id="services" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-heavy max-w-3xl text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                {sections.servicesHeading}
              </h2>
              <p className="mt-5 max-w-xl text-lg text-ash">
                {sections.servicesSubhead}
              </p>
            </Reveal>
            <div className="mt-16 grid gap-px bg-ash-dim/30 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 90} className="bg-pitch">
                  <div className="h-full bg-pitch px-6 py-10">
                    <span className="font-heavy block text-5xl font-extrabold text-ash-dim/50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-bone">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-ash">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process, hanging off one rule. */}
        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="font-code text-xs tracking-[0.2em] text-ash uppercase">
                {sections.stepsHeading}
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-10 border-t border-bone pt-10 md:grid-cols-3 md:gap-16">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <li>
                    <span className="font-code text-xs text-ash">
                      Step {step.number}
                    </span>
                    <h3 className="font-heavy mt-3 text-2xl font-extrabold tracking-tight text-bone">
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
        <section className="px-6 pt-16 pb-28 lg:px-8">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="font-heavy max-w-3xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-7xl">
              {cta.heading}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ash">{cta.body}</p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href={bookingHref}
                className="bg-bone px-9 py-4 text-base font-semibold text-pitch transition-colors hover:bg-white"
              >
                {bookingLabel}
              </a>
              <a
                href={contactHref}
                className="border-b border-ash-dim pb-1 text-base text-ash transition-colors hover:border-bone hover:text-bone"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-ash-dim/40 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="font-code text-xs tracking-[0.2em] text-ash-dim uppercase">
            {site.wordmark}
          </span>
          <span className="font-code text-xs text-ash-dim">Option D · Ridge</span>
        </div>
      </footer>
    </div>
  );
}
