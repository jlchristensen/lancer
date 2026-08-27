import { Reveal } from '@/components/ui/Reveal';
import { processProse } from '@/lib/content';

/**
 * The process, as a paragraph. The order still matters, so the lead clause
 * of each sentence carries it. A row of numbered cards would say the same
 * thing and look like every other landing page.
 */
export function ProcessSection() {
  return (
    <section className="px-6 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="font-heavy text-3xl font-extrabold tracking-tight text-bone lg:text-5xl">
          {processProse.heading}
        </h2>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-ash lg:text-2xl">
          {processProse.sentences.map((sentence) => (
            <span key={sentence.lead}>
              <span className="text-bone">{sentence.lead}</span> {sentence.rest}{' '}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
