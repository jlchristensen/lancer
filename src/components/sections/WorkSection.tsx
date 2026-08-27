import { products } from '@/lib/site';

export function WorkSection() {
  return (
    <section id="work" className="border-y border-slate-200 bg-slate-50 px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Built by Lancer
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These are ours. Same hands, same standards as the client work.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <li key={product.name}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">
                  {product.tagline}
                </p>
                <p className="mt-3 flex-1 text-slate-600">
                  {product.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                  Visit the site
                  <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
