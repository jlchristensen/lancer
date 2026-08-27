import { ContourCanvas } from './ContourCanvas';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

/** Option A — Contour. Black, left-aligned, topographic lines in the hero. */
export function OptionA() {
  return (
    <div className="min-h-screen bg-night text-slate-200">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="text-lg font-bold tracking-tight text-white">
            {site.name}
            <span className="text-iris-400">.</span>
          </span>
          <div className="hidden gap-8 text-sm text-slate-400 md:flex">
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#process" className="transition-colors hover:text-white">Process</a>
          </div>
          <a
            href={bookingHref}
            className="rounded-full bg-iris-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-iris-600"
          >
            {bookingLabel}
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
          <ContourCanvas className="absolute top-0 right-0 h-full w-full opacity-70 md:w-3/5" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.2em] text-iris-400 uppercase">
                  {hero.eyebrow}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                  We build the software your{' '}
                  <span className="bg-gradient-to-r from-azure-400 via-iris-400 to-violet-400 bg-clip-text text-transparent">
                    business is missing.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={bookingHref}
                    className="rounded-full bg-iris-500 px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-iris-600"
                  >
                    {bookingLabel}
                  </a>
                  <a
                    href={contactHref}
                    className="rounded-full border border-white/15 px-8 py-3.5 text-center text-base font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Send an email
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-white/5 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.workHeading}
              </h2>
              <p className="mt-3 text-lg text-slate-400">{sections.workSubhead}</p>
            </Reveal>
            <ul className="mt-12">
              {products.map((product, index) => (
                <li key={product.name}>
                  <Reveal delay={index * 90}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid items-baseline gap-2 border-t border-white/10 py-7 transition-colors hover:border-iris-400/50 md:grid-cols-[minmax(0,14rem)_1fr_auto] md:gap-8"
                    >
                      <span className="text-xl font-semibold text-white">
                        {product.name}
                      </span>
                      <span className="text-slate-400">{product.description}</span>
                      <span className="text-sm font-medium text-iris-400 transition-transform group-hover:translate-x-1">
                        Visit &rarr;
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-white/5 bg-night-2 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.servicesHeading}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate-400">
                {sections.servicesSubhead}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 90}>
                  <div className="border-t border-iris-400/40 pt-6">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-slate-400">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-white/5 px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.stepsHeading}
              </h2>
              <p className="mt-3 text-lg text-slate-400">{sections.stepsSubhead}</p>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 90}>
                  <li>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-iris-400/40 text-sm font-semibold text-iris-300">
                      {step.number}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-white">
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
        <section className="border-t border-white/5 bg-night-2 px-6 py-20 md:py-28 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">{cta.heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">{cta.body}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={bookingHref}
                className="rounded-full bg-iris-500 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-iris-600"
              >
                {bookingLabel}
              </a>
              <a
                href={contactHref}
                className="rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <span className="text-slate-300">{site.wordmark}</span>
          <a href={contactHref} className="transition-colors hover:text-white">
            {site.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
