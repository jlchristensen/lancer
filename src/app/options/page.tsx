import Link from 'next/link';

export const metadata = { title: 'Landing page options' };

type Option = {
  slug: string;
  letter: string;
  name: string;
  summary: string;
  motion: string;
};

const current: Option[] = [
  {
    slug: 'g',
    letter: 'G',
    name: 'Silk',
    summary:
      'Rounded buttons back, everything softened. Nothing on the page is numbered: the services are three plain statements, and the process is a paragraph rather than a row of steps.',
    motion:
      'Long lines drifting across the full screen like silk in slow air. They pass through each other rather than blocking each other out.',
  },
  {
    slug: 'h',
    letter: 'H',
    name: 'Orbit',
    summary:
      'The calm one. Same rules as G, but the work sits on one soft shelf instead of separate tiles, and the services heading holds its place while they scroll past.',
    motion:
      'Thin rings turning at their own speeds, with a point riding two of them. Slow enough to read as still until you look twice.',
  },
];

const earlier: Option[] = [
  {
    slug: 'd',
    letter: 'D',
    name: 'Ridge',
    summary: 'Second pass. Too hard edged, and still built on numbered sets.',
    motion: 'Ridgelines climbing the screen.',
  },
  {
    slug: 'e',
    letter: 'E',
    name: 'Instrument',
    summary: 'Second pass. Same problem, plus a lot of small labels.',
    motion: 'A sweep turning through a dot matrix.',
  },
  {
    slug: 'f',
    letter: 'F',
    name: 'Drift',
    summary: 'Second pass. Kept for the background, which runs the whole page.',
    motion: 'A current behind every section.',
  },
  {
    slug: 'a',
    letter: 'A',
    name: 'Contour',
    summary: 'First pass.',
    motion: 'Canvas contour field in the corner.',
  },
  {
    slug: 'b',
    letter: 'B',
    name: 'Aurora',
    summary: 'First pass.',
    motion: 'Soft colour drift, frosted panels.',
  },
  {
    slug: 'c',
    letter: 'C',
    name: 'Console',
    summary: 'First pass.',
    motion: 'Grid sliding upward.',
  },
];

function OptionLink({ option, muted = false }: { option: Option; muted?: boolean }) {
  return (
    <Link
      href={`/options/${option.slug}`}
      className={`group block border-t border-ash-dim/40 py-6 transition-colors hover:bg-white/[0.04] ${
        muted ? 'opacity-60' : ''
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-code text-xs text-ash">{option.letter}</span>
        <h2 className="text-xl font-semibold text-bone">{option.name}</h2>
        <span className="ml-auto font-code text-xs text-ash transition-transform group-hover:translate-x-1">
          Open &rarr;
        </span>
      </div>
      <p className="mt-3 max-w-2xl text-ash">{option.summary}</p>
      <p className="mt-1 max-w-2xl text-sm text-ash-dim">{option.motion}</p>
    </Link>
  );
}

export default function OptionsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
      <p className="font-code text-[11px] tracking-[0.2em] text-ash uppercase">
        Lancer · landing page
      </p>
      <h1 className="mt-5 text-3xl font-bold text-bone lg:text-4xl">
        Third pass
      </h1>
      <p className="mt-4 text-lg text-ash">
        Rounded buttons and the softer feel of A are back, and the numbering
        is gone. No 01 / 02 / 03, no step badges, no bulleted lists anywhere:
        the services are three statements and the process is a paragraph.
        Same words in both, so you are only judging the look.
      </p>

      <div className="mt-12">
        {current.map((option) => (
          <OptionLink key={option.slug} option={option} />
        ))}
        <div className="border-t border-ash-dim/40" />
      </div>

      <h2 className="mt-16 font-code text-[11px] tracking-[0.2em] text-ash uppercase">
        Earlier passes
      </h2>
      <div className="mt-4">
        {earlier.map((option) => (
          <OptionLink key={option.slug} option={option} muted />
        ))}
        <div className="border-t border-ash-dim/40" />
      </div>

      <p className="mt-14 text-sm text-ash-dim">
        The live site is still at{' '}
        <Link href="/" className="text-ash underline underline-offset-4 hover:text-bone">
          the home page
        </Link>
        . Nothing here is published.
      </p>
    </main>
  );
}
