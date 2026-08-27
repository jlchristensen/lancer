import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/lib/site';
import { sections } from '@/lib/content';

/** Tiles sit at three different heights, so the row does not read as a grid. */
const offsets = ['', 'md:mt-12', 'md:mt-24'];

export function WorkSection() {
  return (
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
              className={offsets[index % offsets.length]}
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
                <span
                  aria-hidden="true"
                  className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-bone transition-all duration-500 group-hover:border-bone group-hover:bg-bone group-hover:text-pitch"
                >
                  &rarr;
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
