import { OrbitField } from './OrbitField';
import { Reveal } from './Reveal';
import { bookingHref, bookingLabel, contactHref, products, site } from '@/lib/site';
import { cta, hero, processProse, sections, services } from '@/lib/content';

const pill =
  'inline-flex items-center justify-center rounded-full px-9 py-4 text-base font-semibold transition-all duration-300';

/**
 * Option H "Orbit". The calm one. Thin rings turning slowly behind the
 * type, work gathered onto a single soft shelf rather than split into
 * cards, and the process written out as a paragraph.
 */
export function OptionH() {
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
          <OrbitField className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch via-pitch/75 to-transparent" />

          <div className="relative mx-auto w-full max-w-5xl pt-24">
            <Reveal>
              <p className="text-sm tracking-wide text-ash">{site.wordmark}</p>
            </Reveal>
            <Reveal delay={160}>
              <h1 className="font-heavy mt-7 max-w-2xl text-[2.6rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-bone sm:text-6xl lg:text-[4.6rem]">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ash">
                {hero.subhead}
              </p>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a href={bookingHref} className={`${pill} bg-bone text-pitch hover:bg-white`}>
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

        {/* Work, gathered on one shelf. */}
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

            <Reveal delay={120}>
              <div className="mt-14 overflow-hidden rounded-[2rem] bg-pitch-2">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 border-b border-white/5 px-8 py-9 transition-colors duration-500 last:border-b-0 hover:bg-[#17171c] md:grid-cols-[minmax(0,15rem)_1fr_auto] md:items-center md:gap-10"
                  >
                    <span>
                      <span className="font-heavy block text-2xl font-extrabold tracking-tight text-bone">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-sm text-ash">
                        {product.tagline}
                      </span>
                    </span>
                    <span className="text-ash">{product.description}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-all duration-500 group-hover:border-bone group-hover:bg-bone group-hover:text-pitch">
                      &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services, with the heading holding its place as they scroll past. */}
        <section id="services" className="px-6 py-28 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-20">
            <Reveal>
              <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone md:sticky md:top-32 lg:text-4xl">
                {sections.servicesHeading}
              </h2>
            </Reveal>
            <div className="space-y-16">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 110}>
                  <div>
                    <h3 className="font-heavy text-2xl leading-tight font-extrabold tracking-tight text-bone lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-ash">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process as a paragraph, set on a soft panel. */}
        <section className="px-6 py-28 lg:px-8">
          <Reveal className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-pitch-2 px-8 py-14 lg:px-14">
              <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-4xl">
                {processProse.heading}
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ash">
                {processProse.sentences.map((sentence) => (
                  <span key={sentence.lead}>
                    <span className="text-bone">{sentence.lead}</span>{' '}
                    {sentence.rest}{' '}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Closing, rings turning behind it. */}
        <section className="relative overflow-hidden px-6 py-32 lg:px-8">
          <OrbitField className="absolute inset-0 h-full w-full opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-pitch via-pitch/70 to-pitch" />
          <Reveal className="relative mx-auto max-w-5xl text-center">
            <h2 className="font-heavy mx-auto max-w-2xl text-4xl font-extrabold tracking-[-0.03em] text-bone lg:text-6xl">
              {cta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ash">{cta.body}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
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
          <span>Option H · Orbit</span>
        </div>
      </footer>
    </div>
  );
}
