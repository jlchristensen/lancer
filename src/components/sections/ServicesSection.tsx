import { sections, services } from '@/lib/content';

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {sections.servicesHeading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {sections.servicesSubhead}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
