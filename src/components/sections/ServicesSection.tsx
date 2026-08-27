const services = [
  {
    title: 'Websites, new and rebuilt',
    description:
      'A new site, or a rebuild of one that stopped matching the business behind it. Quick to load, easy to edit, and yours to keep.',
  },
  {
    title: 'Product builds, 0 to 1',
    description:
      'From a rough sketch to something people can sign into and pay for. Web and mobile, taken all the way to launch.',
  },
  {
    title: 'Automation and dashboards',
    description:
      'The work that gives hours back every week. Internal tools, automated pipelines, and reporting you can read at a glance.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three kinds of work, each scoped as a defined project rather than
            an open meter.
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
