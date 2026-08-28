import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/lib/site';
import { sections } from '@/lib/content';

const shots: Record<string, { src: string; position: string }> = {
  Chip: { src: '/products/chip.png', position: 'object-top' },
  Sage: { src: '/products/sage.png', position: 'object-top' },
  // portrait composition: the content band sits ~38% down the image
  'The Social Project': { src: '/products/tsp.png', position: 'object-[center_36%]' },
};

export function WorkSection() {
  return (
    <section id="work" className="border-y border-line/60 bg-ink-2/40 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heavy text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
            {sections.workHeading}
          </h2>
          <p className="mt-4 text-mute">{sections.workSubhead}</p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <li key={product.name}>
              <Reveal delay={index * 110} className="h-full">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="relative h-44 overflow-hidden border-b border-line bg-ink-3">
                    <Image
                      src={shots[product.name]?.src ?? '/products/chip.png'}
                      alt={`${product.name} screenshot`}
                      width={1440}
                      height={787}
                      className={`h-full w-full object-cover ${shots[product.name]?.position ?? 'object-top'} transition-transform duration-700 group-hover:scale-[1.03]`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-paper">
                        {product.name}
                      </h3>
                      <span className="flex items-center gap-1.5 text-[11px] text-accent-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
                        Live
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-mute-dim">{product.tagline}</p>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-mute">
                      {product.description}
                    </p>
                    <span className="mt-6 text-sm font-semibold text-paper transition-colors group-hover:text-accent-soft">
                      Visit the site
                      <span
                        aria-hidden="true"
                        className="ml-1 inline-block transition-transform group-hover:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
