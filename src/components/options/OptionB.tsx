import { AuroraBackdrop } from './AuroraBackdrop';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, sections, services, steps } from '@/lib/content';

const card =
  'rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.06]';

/** Option B — Aurora. Centred, soft drifting colour, glass panels. */
export function OptionB() {
  return (
    <div className="min-h-screen bg-night text-slate-200">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-3xl items-center justify-between rounded-full border border-white/10 bg-night-2/80 px-5 py-3 backdrop-blur-xl">
          <span className="text-base font-bold tracking-tight text-white">
            {site.name}
          </span>
          <div className="hidden gap-7 text-sm text-slate-400 sm:flex">
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
          </div>
          <a
            href={bookingHref}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-night transition-opacity hover:opacity-90"
          >
            {bookingLabel}
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-36 pb-24 md:pt-52 md:pb-32 lg:px-8">
          <AuroraBackdrop />
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-iris-400" />
                {hero.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                {hero.subhead}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={bookingHref}
                  className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-night transition-opacity hover:opacity-90"
                >
                  {bookingLabel}
                </a>
                <a
                  href={contactHref}
                  className="rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-slate-200 transition-colors hover:border-white/40 hover:text-white"
                >
                  Send an email
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.workHeading}
              </h2>
              <p className="mt-4 text-lg text-slate-400">{sections.workSubhead}</p>
            </Reveal>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {products.map((product, index) => (
                <li key={product.name}>
                  <Reveal delay={index * 110} className="h-full">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex h-full flex-col ${card}`}
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-iris-300">
                        {product.tagline}
                      </p>
                      <p className="mt-4 flex-1 text-slate-400">
                        {product.description}
                      </p>
                      <span className="mt-5 text-sm font-semibold text-white transition-transform group-hover:translate-x-1">
                        Visit the site &rarr;
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.servicesHeading}
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                {sections.servicesSubhead}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 110} className="h-full">
                  <div className={`h-full ${card}`}>
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
        <section className="px-6 py-20 md:py-28 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                {sections.stepsHeading}
              </h2>
              <p className="mt-4 text-lg text-slate-400">{sections.stepsSubhead}</p>
            </Reveal>
            <ol className="mt-12 space-y-4">
              {steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 110}>
                  <li className={`flex gap-5 ${card}`}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-iris-500/20 text-sm font-semibold text-iris-300">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-slate-400">{step.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:px-8">
          <AuroraBackdrop />
          <Reveal className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">{cta.heading}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">{cta.body}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={bookingHref}
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-night transition-opacity hover:opacity-90"
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
