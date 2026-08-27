import Link from 'next/link';

export const metadata = { title: 'Landing page options' };

const options = [
  {
    slug: 'a',
    letter: 'A',
    name: 'Contour',
    summary:
      'Black, left aligned, with topographic lines drifting behind the headline. The closest to the reference you sent.',
    motion: 'Canvas contour field, always moving. Work listed as full width rows.',
  },
  {
    slug: 'b',
    letter: 'B',
    name: 'Aurora',
    summary:
      'Centred and calmer. Soft colour drifts behind the type, everything else sits on frosted glass panels.',
    motion: 'Slow colour drift, no canvas. Floating pill nav.',
  },
  {
    slug: 'c',
    letter: 'C',
    name: 'Console',
    summary:
      'Split hero with the live products right there beside the headline. Hairline rules and monospaced labels.',
    motion: 'A grid sliding upward with a sheen passing over it.',
  },
];

export default function OptionsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="font-mono text-[11px] tracking-[0.18em] text-slate-500 uppercase">
        Lancer · landing page
      </p>
      <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">
        Three dark directions
      </h1>
      <p className="mt-4 text-lg text-slate-400">
        Same words, same sections, same links in all three. Only the design
        changes, so you are comparing the look and not the copy. Every one of
        them holds still for anyone whose device asks for less motion.
      </p>

      <ul className="mt-12 space-y-4">
        {options.map((option) => (
          <li key={option.slug}>
            <Link
              href={`/options/${option.slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-iris-400/50 hover:bg-white/[0.06]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-iris-400">
                  {option.letter}
                </span>
                <h2 className="text-xl font-semibold text-white">
                  {option.name}
                </h2>
                <span className="ml-auto text-sm text-slate-500 transition-transform group-hover:translate-x-1">
                  Open &rarr;
                </span>
              </div>
              <p className="mt-3 text-slate-400">{option.summary}</p>
              <p className="mt-2 text-sm text-slate-500">{option.motion}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-sm text-slate-500">
        The current live site is still at{' '}
        <Link href="/" className="text-slate-300 underline underline-offset-4 hover:text-white">
          the home page
        </Link>
        . Nothing here is published.
      </p>
    </main>
  );
}
