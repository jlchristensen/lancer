import { Reveal } from '@/components/ui/Reveal';
import { sections, services } from '@/lib/content';

/**
 * Three statements with room around them. Deliberately not numbered and
 * not boxed: the work is three kinds of thing, not three steps.
 */
export function ServicesSection() {
  return (
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
  );
}
