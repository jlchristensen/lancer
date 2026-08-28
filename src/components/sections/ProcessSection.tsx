import { Reveal } from '@/components/ui/Reveal';
import { processProse } from '@/lib/content';

/**
 * The process, as a paragraph. Three cards in a row would say the same thing
 * and look like every other landing page, so the sentences carry the order.
 */
export function ProcessSection() {
  return (
    <section id="process" className="px-6 pt-0 pb-24 lg:px-8 lg:pb-32">
      <Reveal className="mx-auto max-w-4xl">
        <h2 className="font-heavy text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
          {processProse.heading}
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-mute lg:text-2xl">
          {processProse.sentences.map((sentence) => (
            <span key={sentence.lead}>
              <span className="text-paper">{sentence.lead}</span> {sentence.rest}{' '}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
