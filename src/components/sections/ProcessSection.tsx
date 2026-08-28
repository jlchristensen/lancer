import { Reveal } from '@/components/ui/Reveal';
import { processProse, sections } from '@/lib/content';

/**
 * The process, as a paragraph. Three cards in a row would say the same thing
 * and look like every other landing page, so the sentences carry the order.
 */
export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-24 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-4xl">
        <p className="font-heavy text-[11px] font-semibold tracking-[0.2em] text-accent-soft uppercase">
          {sections.processEyebrow}
        </p>
        <h2 className="mt-3 font-heavy text-3xl leading-tight font-normal tracking-[-0.02em] text-paper lg:text-[2.6rem]">
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
