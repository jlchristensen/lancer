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
    slug: 'd',
    letter: 'D',
    name: 'Ridge',
    summary:
      'No colour at all. Bone type on pitch, square corners, no cards anywhere. Work rows invert to solid bone when you hover them.',
    motion:
      'Ridgelines climbing the full height of the screen, each one hiding the ones behind it.',
  },
  {
    slug: 'e',
    letter: 'E',
    name: 'Instrument',
    summary:
      'Split hero with the shipped work in a readout panel beside the headline. Sodium amber, rationed to the things that are actually live.',
    motion: 'A sweep turning through a dot matrix, lighting what it passes.',
  },
  {
    slug: 'f',
    letter: 'F',
    name: 'Drift',
    summary:
      'Editorial and quiet. Full screen hero, wide measure, the brand green surfacing rarely.',
    motion:
      'A current running behind the entire page, not just the hero, so the background never goes dead as you scroll.',
  },
];

const firstPass: Option[] = [
  {
    slug: 'a',
    letter: 'A',
    name: 'Contour',
    summary: 'First pass. Kept for comparison.',
    motion: 'Canvas contour field in the corner.',
  },
  {
    slug: 'b',
    letter: 'B',
    name: 'Aurora',
    summary: 'First pass. Kept for comparison.',
    motion: 'Soft colour drift, frosted panels.',
  },
  {
    slug: 'c',
    letter: 'C',
    name: 'Console',
    summary: 'First pass. Kept for comparison.',
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
        Second pass
      </h1>
      <p className="mt-4 text-lg text-ash">
        Built from D and E, which came out of the two you liked. Gone from all
        three: gradient text, frosted glass cards, and the indigo. Every
        background now moves on its own rather than sitting still behind the
        fold. Same words throughout, so you are only judging the look.
      </p>

      <div className="mt-12">
        {current.map((option) => (
          <OptionLink key={option.slug} option={option} />
        ))}
        <div className="border-t border-ash-dim/40" />
      </div>

      <h2 className="mt-16 font-code text-[11px] tracking-[0.2em] text-ash uppercase">
        First pass
      </h2>
      <div className="mt-4">
        {firstPass.map((option) => (
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
