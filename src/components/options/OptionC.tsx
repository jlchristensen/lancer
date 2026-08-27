import { GridField } from './GridField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

const label = 'font-mono text-[11px] tracking-[0.18em] text-slate-500 uppercase';

/** Option C — Console. Split hero, hairline rules, monospaced labels. */
export function OptionC() {
  return (
    <div className="min-h-screen bg-night text-slate-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="font-mono text-sm tracking-[0.18em] text-white uppercase">
            {site.name}
          </span>
          <a
            href={bookingHref}
            className="border border-iris-400/50 px-5 py-2 font-mono text-[11px] tracking-[0.14em] text-iris-300 uppercase transition-colors hover:bg-iris-500 hover:text-white"
          >
            {bookingLabel}
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
          <GridField />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div>
              <Reveal>
                <p className={label}>{hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {hero.headline}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={bookingHref}
                    className="bg-iris-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-iris-600"
                  >
                    {bookingLabel}
                  </a>
                  <a
                    href={contactHref}
                    className="border border-white/15 px-8 py-3.5 text-center text-base font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Send an email
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Live products, right there in the hero */}
            <Reveal delay={400}>
              <div className="border border-white/10 bg-night-2/60 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                  <span className={label}>Shipped</span>
                  <span className={label}>{products.length} live</span>
                </div>
                <ul>
                  {products.map((product) => (
                    <li key={product.name} className="border-b border-white/5 last:border-b-0">
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/5"
                      >
                        <span>
                          <span className="block font-medium text-white">
                            {product.name}
                          </span>
                          <span className="block text-sm text-slate-500">
                            {product.tagline}
                          </span>
                        </span>
                        <span className="font-mono text-xs text-iris-400 transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services as spec rows */}
        <section id="services" className="border-t border-white/5 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className={label}>{sections.servicesHeading}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                {sections.servicesSubhead}
              </h2>
            </Reveal>
            <div className="mt-14">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 90}>
                  <div className="grid gap-3 border-t border-white/10 py-8 md:grid-cols-[4rem_minmax(0,18rem)_1fr] md:gap-10">
                    <span className="font-mono text-sm text-iris-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-white/5 bg-night-2 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className={label}>{sections.stepsHeading}</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                {sections.stepsSubhead}
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <li className="border-t-2 border-iris-500 pt-6">
                    <span className={label}>Step {step.number}</span>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-400">{step.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-white/5 px-6 py-20 md:py-28 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  {cta.heading}
                </h2>
                <p className="mt-5 max-w-xl text-lg text-slate-400">{cta.body}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={bookingHref}
                  className="bg-iris-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-iris-600"
                >
                  {bookingLabel}
                </a>
                <a
                  href={contactHref}
                  className="border border-white/15 px-8 py-3.5 text-center text-base font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
          <span className={label}>{site.wordmark}</span>
          <a
            href={contactHref}
            className="font-mono text-xs text-slate-500 transition-colors hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
