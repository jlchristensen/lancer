import Image from 'next/image';

/**
 * The two device mockups used on the landing page.
 *
 * Everything about the frames is CSS: gradient metal edge, black bezel,
 * dynamic island, home indicator, browser chrome. The screenshots are plain
 * files in public/products, so refreshing one never touches this file.
 */

export function PhoneFrame({
  src,
  alt,
  screenBg,
  light = false,
  className = '',
}: {
  src: string;
  alt: string;
  /** The app's own background colour, shown behind the status bar and any
   *  gap below the screenshot, so the frame reads as the app running. */
  screenBg: string;
  /** Light-screened apps need a dark home indicator. */
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="rounded-[2.2rem] bg-gradient-to-b from-[#3b4661] via-[#1c2538] to-[#0b1220] p-[2px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="rounded-[calc(2.2rem-2px)] bg-[#04060c] p-[6px]">
          <div
            className="relative aspect-[10/21] overflow-hidden rounded-[1.7rem]"
            style={{ backgroundColor: screenBg }}
          >
            {/* status-bar breathing room, so the island never sits on content */}
            <div className="h-[26px]" />
            <Image
              src={src}
              alt={alt}
              width={430}
              height={900}
              className="h-auto w-full"
            />
            <div className="absolute top-[7px] left-1/2 h-[14px] w-[54px] -translate-x-1/2 rounded-full bg-[#04060c]" />
            <div
              className={`absolute bottom-[6px] left-1/2 h-[3px] w-[72px] -translate-x-1/2 rounded-full ${
                light ? 'bg-black/25' : 'bg-white/25'
              }`}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),inset_0_0_0_1px_rgba(255,255,255,0.03)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrowserFrame({
  src,
  alt,
  url,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      <div className="rounded-2xl bg-gradient-to-b from-[#33405c] via-[#1a2438] to-[#0b1220] p-px shadow-[0_60px_120px_-35px_rgba(0,0,0,0.95)]">
        <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-ink-2">
          <div className="relative flex items-center border-b border-white/[0.05] bg-white/[0.025] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-[7px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57] shadow-[inset_0_0_1px_rgba(0,0,0,0.35)]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e] shadow-[inset_0_0_1px_rgba(0,0,0,0.35)]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28c840] shadow-[inset_0_0_1px_rgba(0,0,0,0.35)]" />
            </div>
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-md bg-black/30 px-5 py-[3.5px] text-[11px] text-mute-dim">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="h-2.5 w-2.5"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              {url}
            </div>
          </div>
          <Image
            src={src}
            alt={alt}
            width={1485}
            height={812}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
