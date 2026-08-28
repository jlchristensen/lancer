import { Reveal } from '@/components/ui/Reveal';
import { sections, services } from '@/lib/content';

/** A small mark per service. Geometric, drawn inline, no icon dependency. */
const marks = [
  <path key="a" d="M3 7h18M3 12h12M3 17h7" />,
  <path key="b" d="M12 3v18M4 8l8-5 8 5M4 16l8 5 8-5" />,
  <path key="c" d="M4 19V9m5 10V5m5 14v-7m5 7V11" />,
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-heavy text-[11px] font-semibold tracking-[0.2em] text-accent-soft uppercase">
            {sections.servicesEyebrow}
          </p>
          <h2 className="mt-3 font-heavy max-w-lg text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
            {sections.servicesHeading}
          </h2>
          <p className="mt-4 max-w-xl text-mute">{sections.servicesSubhead}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 110} className="h-full">
              <div className="group h-full rounded-2xl border border-line bg-ink-2/60 p-7 transition-colors duration-500 hover:border-accent/40 hover:bg-ink-3/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-ink-3 text-accent-soft">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    {marks[index % marks.length]}
                  </svg>
                </span>
                <h3 className="mt-6 text-lg font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
