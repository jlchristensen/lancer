import { DriftField } from './DriftField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

/**
 * Option F "Drift". The current runs behind the entire page rather than
 * stopping at the fold, so the background never goes dead as you scroll.
 * Brand green is the only colour, and it barely shows up.
 */
export function OptionF() {
  return (
    <div className="relative min-h-screen bg-pitch font-sans text-bone">
      {/* One field, fixed, behind every section. */}
      <DriftField className="pointer-events-none fixed inset-0 h-full w-full opacity-70" />

      <div className="relative">
        <header className="fixed inset-x-0 top-0 z-50">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-8">
            <span className="font-heavy text-lg font-extrabold tracking-tight text-bone">
              {site.name}
            </span>
            <a
              href={bookingHref}
              className="border-b border-brand-500 pb-1 text-sm font-medium text-bone transition-colors hover:text-brand-300"
            >
              {bookingLabel}
            </a>
          </nav>
        </header>

        <main>
          {/* Hero fills the first screen. */}
          <section className="flex min-h-screen items-center px-6 lg:px-8">
            <div className="mx-auto w-full max-w-5xl">
              <Reveal>
                <p className="font-code text-[11px] tracking-[0.24em] text-brand-300 uppercase">
                  {hero.eyebrow}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-heavy mt-8 max-w-3xl text-[2.5rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-bone sm:text-6xl lg:text-7xl">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-ash">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={420}>
                <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <a
                    href={bookingHref}
                    className="bg-brand-600 px-9 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500"
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

          {/* Everything below sits on a veil so the type stays readable. */}
          <div className="bg-pitch/85 backdrop-blur-[2px]">
            <section id="work" className="px-6 py-24 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <Reveal>
                  <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                    {sections.workHeading}
                  </h2>
                  <p className="mt-4 max-w-md text-lg text-ash">
                    {sections.workSubhead}
                  </p>
                </Reveal>
                <div className="mt-14">
                  {products.map((product, index) => (
                    <Reveal key={product.name} delay={index * 80}>
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid gap-2 border-t border-ash-dim/40 py-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12"
                      >
                        <span>
                          <span className="font-heavy block text-2xl font-extrabold tracking-tight text-bone transition-colors group-hover:text-brand-300">
                            {product.name}
                          </span>
                          <span className="mt-1 block font-code text-[11px] tracking-[0.16em] text-ash uppercase">
                            {product.tagline}
                          </span>
                        </span>
                        <span className="text-ash">{product.description}</span>
                      </a>
                    </Reveal>
                  ))}
                  <div className="border-t border-ash-dim/40" />
                </div>
              </div>
            </section>

            <section id="services" className="px-6 py-24 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <Reveal>
                  <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                    {sections.servicesHeading}
                  </h2>
                  <p className="mt-4 max-w-lg text-lg text-ash">
                    {sections.servicesSubhead}
                  </p>
                </Reveal>
                <div className="mt-14 space-y-14">
                  {services.map((service, index) => (
                    <Reveal key={service.title} delay={index * 90}>
                      <div className="grid gap-4 md:grid-cols-[4rem_1fr] md:gap-10">
                        <span className="font-code text-sm text-brand-300">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="text-2xl font-semibold text-bone">
                            {service.title}
                          </h3>
                          <p className="mt-3 max-w-xl text-ash">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 py-24 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <Reveal>
                  <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                    {sections.stepsHeading}
                  </h2>
                </Reveal>
                <ol className="mt-14 grid gap-10 md:grid-cols-3">
                  {steps.map((step, index) => (
                    <Reveal key={step.number} delay={index * 90}>
                      <li className="border-t border-brand-600 pt-6">
                        <span className="font-code text-[11px] tracking-[0.2em] text-ash uppercase">
                          Step {step.number}
                        </span>
                        <h3 className="mt-3 text-xl font-semibold text-bone">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-ash">{step.description}</p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </section>

            <section className="px-6 pt-12 pb-28 lg:px-8">
              <Reveal className="mx-auto max-w-5xl">
                <h2 className="font-heavy max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-6xl">
                  {cta.heading}
                </h2>
                <p className="mt-6 max-w-xl text-lg text-ash">{cta.body}</p>
                <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                  <a
                    href={bookingHref}
                    className="bg-brand-600 px-9 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-500"
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

            <footer className="border-t border-ash-dim/40 px-6 py-8 lg:px-8">
              <div className="mx-auto flex max-w-5xl items-center justify-between">
                <span className="font-code text-[11px] tracking-[0.2em] text-ash-dim uppercase">
                  {site.wordmark}
                </span>
                <span className="font-code text-[11px] text-ash-dim">
                  Option F · Drift
                </span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
