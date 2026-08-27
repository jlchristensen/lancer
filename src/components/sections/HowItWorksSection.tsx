const steps = [
  {
    number: '1',
    title: 'Call',
    description:
      "Twenty minutes on what's slow, what's manual, and what it costs you today.",
  },
  {
    number: '2',
    title: 'Scope',
    description:
      'A written plan with a fixed price and a date on it. No hourly meter, no surprises.',
  },
  {
    number: '3',
    title: 'Build and hand off',
    description:
      'Working software in front of you every week. At the end you own the code, the accounts, and the documentation.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three steps, in order. Each one ends with something you can look at.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-base font-semibold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
