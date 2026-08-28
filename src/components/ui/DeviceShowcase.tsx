import { BrowserFrame, PhoneFrame } from './DeviceFrames';

/**
 * The hero centrepiece: the Sage window with one real phone tucked at its
 * edge — Chip's actual mobile screen, recorded on a phone, not a desktop
 * crop. One good phone beats three mediocre ones; The Social Project has
 * no capture worth framing yet, so it stays out.
 */
export function DeviceShowcase() {
  return (
    <div className="relative mx-auto max-w-[640px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-[-8rem] top-[10%] bottom-[-6rem] -z-10 bg-[radial-gradient(65%_70%_at_50%_60%,rgba(255,255,255,0.9),rgba(214,190,255,0.35)_55%,transparent_80%)] blur-2xl"
      />

      <div className="flex items-end justify-center">
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
