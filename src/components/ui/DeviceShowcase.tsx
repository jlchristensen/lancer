import Image from 'next/image';

/**
 * The hero centrepiece: Chip in a browser window, with Sage and The Social
 * Project in phone frames overlapping it.
 *
 * The frames are drawn in CSS rather than baked into the images, so the
 * screenshots can be replaced by dropping new files into public/products
 * without redoing any artwork.
 */

function Phone({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`w-[122px] shrink-0 rounded-[1.75rem] border border-line bg-ink-3 p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.85)] sm:w-[152px] lg:w-[178px] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.4rem]">
        <Image
          src={src}
          alt={alt}
          width={430}
          height={932}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export function DeviceShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="flex items-end justify-center gap-3 sm:gap-5 lg:gap-8">
        <Phone
          src="/products/sage.jpg"
          alt="Sage, an adaptive learning app, running on a phone"
          className="relative z-20 mb-6 rotate-[-4deg] lg:mb-10"
        />

        {/* Chip, in a browser window */}
        <div className="relative z-10 hidden min-w-0 flex-1 rounded-xl border border-line bg-ink-3 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.9)] sm:block">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="mx-auto rounded bg-ink-2 px-6 py-0.5 text-[10px] text-mute-dim">
              playwithchip.com
            </span>
          </div>
          <div className="overflow-hidden rounded-b-xl">
            <Image
              src="/products/chip.jpg"
              alt="Chip, a poker learning app, running in a browser"
              width={1440}
              height={787}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <Phone
          src="/products/tsp.jpg"
          alt="The Social Project, a nightly question app, running on a phone"
          className="relative z-20 mb-6 rotate-[4deg] lg:mb-10"
        />
      </div>
    </div>
  );
}
