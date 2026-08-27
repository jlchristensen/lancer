import { SilkField } from './SilkField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, processProse, sections, services } from '@/lib/content';

const pill =
  'inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-semibold transition-all duration-300';

/**
 * Option G "Silk". Rounded and unhurried. Nothing on this page is numbered
 * or bulleted: the services are three statements, and the process is a
 * paragraph rather than a row of steps.
 */
export function OptionG() {
  return (
    <div className="min-h-screen bg-pitch font-sans text-bone">
      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5 lg:px-8">
        <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/8 bg-pitch/70 py-3 pr-3 pl-6 backdrop-blur-md">
          <span className="font-heavy text-base font-extrabold tracking-tight text-bone">
            {site.name}
          </span>
          <a
            href={bookingHref}
            className="rounded-full bg-bone px-6 py-2.5 text-sm font-semibold text-pitch transition-colors duration-300 hover:bg-white"
          >
            {bookingLabel}
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
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
                <a
                  href={bookingHref}
                  className={`${pill} bg-bone text-pitch hover:bg-white`}
                >
                  {bookingLabel}
                </a>
                <a
                  href={contactHref}
                  className={`${pill} border border-white/15 text-ash hover:border-white/40 hover:text-bone`}
                >
                  Send an email
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Work. Tiles sit at different heights so it does not read as a grid. */}
        <section id="work" className="px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-heavy max-w-xl text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                {sections.workHeading}
              </h2>
              <p className="mt-5 max-w-md text-lg text-ash">
                {sections.workSubhead}
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {products.map((product, index) => (
                <Reveal
                  key={product.name}
                  delay={index * 120}
                  className={index === 1 ? 'md:mt-12' : index === 2 ? 'md:mt-24' : ''}
                >
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-3xl bg-pitch-2 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#16161b]"
                  >
                    <span className="font-heavy text-2xl font-extrabold tracking-tight text-bone">
                      {product.name}
                    </span>
                    <span className="mt-2 text-sm text-ash">{product.tagline}</span>
                    <span className="mt-6 flex-1 text-ash">{product.description}</span>
                    <span className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-all duration-500 group-hover:border-bone group-hover:bg-bone group-hover:text-pitch">
                      &rarr;
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services as three statements, not a numbered set. */}
        <section id="services" className="px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
                {sections.servicesHeading}
              </h2>
            </Reveal>
            <div className="mt-20 space-y-20">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 100}>
                  <div className="grid gap-5 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-16">
                    <h3 className="font-heavy max-w-md text-2xl leading-tight font-extrabold tracking-tight text-bone lg:text-4xl">
                      {service.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-ash">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process as a paragraph. */}
        <section className="px-6 py-28 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
              {processProse.heading}
            </h2>
            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-ash lg:text-2xl">
              {processProse.sentences.map((sentence) => (
                <span key={sentence.lead}>
                  <span className="text-bone">{sentence.lead}</span>{' '}
                  {sentence.rest}{' '}
                </span>
              ))}
            </p>
          </Reveal>
        </section>

        {/* Closing, with the silk running behind it again. */}
        <section className="relative overflow-hidden px-6 py-32 lg:px-8">
          <SilkField className="absolute inset-0 h-full w-full opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/70 to-pitch/40" />
          <Reveal className="relative mx-auto max-w-5xl">
            <h2 className="font-heavy max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-6xl">
              {cta.heading}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ash">{cta.body}</p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a href={bookingHref} className={`${pill} bg-bone text-pitch hover:bg-white`}>
                {bookingLabel}
              </a>
              <a
                href={contactHref}
                className={`${pill} border border-white/15 text-ash hover:border-white/40 hover:text-bone`}
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-ash-dim">
          <span>{site.wordmark}</span>
          <span>Option G · Silk</span>
        </div>
      </footer>
    </div>
  );
}
