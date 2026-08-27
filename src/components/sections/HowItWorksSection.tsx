import { sections, steps } from '@/lib/content';

export function HowItWorksSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            {sections.stepsHeading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{sections.stepsSubhead}</p>
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
