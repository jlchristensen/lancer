import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/lib/site';
import { sections } from '@/lib/content';

/**
 * Recent projects, kept deliberately spare: image, name, one line, link.
 * Jack cut everything wordier as template noise; resist adding it back.
 */
/** Each card image is pre-cropped to 16:10 at the container's real size,
 *  so nothing gets zoom-cropped into mush at render time. */
const shots: Record<string, { src: string; w: number; h: number }> = {
  Chip: { src: '/products/card-chip.png', w: 1320, h: 825 },
  Sage: { src: '/products/card-sage.png', w: 785, h: 490 },
  'The Social Project': { src: '/products/card-tsp.png', w: 742, h: 463 },
};

export function WorkSection() {
  return (
    <section id="work" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heavy text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
            {sections.workHeading}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <li key={product.name}>
              <Reveal delay={index * 110} className="h-full">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-22px_rgba(22,24,29,0.25)] ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-22px_rgba(22,24,29,0.32)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={shots[product.name]?.src ?? '/products/card-sage.png'}
                      alt={`${product.name} screenshot`}
                      width={shots[product.name]?.w ?? 785}
                      height={shots[product.name]?.h ?? 490}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold text-paper">
                        {product.name}
                      </h3>
                      <span className="text-xs text-mute-dim">Live</span>
                    </div>
                    <p className="mt-1 flex-1 text-[15px] text-mute">
                      {product.tagline}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-paper transition-colors group-hover:text-accent-soft">
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
