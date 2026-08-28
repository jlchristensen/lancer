import { Reveal } from '@/components/ui/Reveal';
import { sections, services } from '@/lib/content';

/**
 * Services as editorial rows on hairlines, not icon cards. Each row ends
 * with a proof line pointing at something real we shipped: specificity is
 * the one thing a template cannot fake, so it carries the credibility here.
 */
export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-heavy max-w-xl text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
            {sections.servicesHeading}
          </h2>
          <p className="mt-4 max-w-xl text-mute">{sections.servicesSubhead}</p>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-14 lg:py-12">
                <h3 className="font-heavy text-xl leading-snug font-normal tracking-[-0.01em] text-paper lg:text-2xl">
                  {service.title}
                </h3>
                <div>
                  <p className="max-w-2xl leading-relaxed text-mute">
                    {service.description}
                  </p>
                  <p className="mt-3 text-[15px] font-medium text-paper">
                    {service.proof}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
