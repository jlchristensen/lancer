import { BrowserFrame, PhoneFrame } from './DeviceFrames';

/**
 * The hero centrepiece: the Sage window flanked by two real phones — Chip's
 * mobile screen from an actual phone recording, and The Social Project's
 * live hero captured on a phone at jointhesocialproject.com. Every screen
 * is a real capture, never a mockup of a state that does not exist.
 */
export function DeviceShowcase() {
  return (
    <div className="relative mx-auto max-w-[640px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-[-8rem] top-[10%] bottom-[-6rem] -z-10 bg-[radial-gradient(65%_70%_at_50%_60%,rgba(255,255,255,0.9),rgba(214,190,255,0.35)_55%,transparent_80%)] blur-2xl"
      />

      <div className="flex items-end justify-center">
        <PhoneFrame
          src="/products/tsp-mobile.png"
          alt="The Social Project, a nightly question circle, on a phone"
          screenBg="#131d12"
          className="z-20 hidden -rotate-[5deg] mb-[-14px] -mr-16 w-[128px] sm:-mr-20 sm:block sm:w-[156px] lg:w-[172px]"
        />
        <BrowserFrame
          src="/products/sage-window.png"
          alt="Sage, an adaptive learning app, in a browser window"
          url="learningwithsage.com"
          imgWidth={785}
          imgHeight={812}
          priority
          className="z-10 min-w-0 flex-1"
        />
        <PhoneFrame
          src="/products/chip-mobile.png"
          alt="Chip, a poker learning app, on a phone"
          screenBg="#0b0d10"
          className="z-20 -ml-16 mb-[-14px] w-[128px] rotate-[5deg] sm:-ml-20 sm:w-[156px] lg:w-[172px]"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-12 -bottom-8 -z-10 h-12 rounded-[100%] bg-black/15 blur-2xl"
      />
    </div>
  );
}
