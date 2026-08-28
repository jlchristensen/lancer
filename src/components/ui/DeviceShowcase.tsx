import { BrowserFrame, PhoneFrame } from './DeviceFrames';

/**
 * The hero centrepiece: Chip in a browser window, Sage and The Social
 * Project in phone frames tucked slightly behind its corners, all seated on
 * a blue-violet bloom so the group reads as one object on a lit stage.
 */
export function DeviceShowcase() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* stage bloom */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-24 top-1/4 -bottom-24 -z-10 bg-[radial-gradient(55%_65%_at_50%_80%,rgba(47,125,255,0.30),rgba(122,86,255,0.14)_50%,transparent_78%)] blur-2xl"
      />

      <div className="flex items-end justify-center">
        <PhoneFrame
          src="/products/sage.png"
          alt="Sage, an adaptive learning app, on a phone"
          className="z-20 -mr-6 mb-3 w-[126px] rotate-[-5deg] sm:-mr-10 sm:w-[168px] lg:-mr-14 lg:w-[192px]"
        />

        <BrowserFrame
          src="/products/chip.png"
          alt="Chip, a poker learning app, in a browser window"
          url="playwithchip.com"
          priority
          className="z-10 hidden min-w-0 max-w-2xl flex-1 sm:block"
        />

        <PhoneFrame
          src="/products/tsp.png"
          alt="The Social Project, a nightly question app, on a phone"
          className="z-20 -ml-6 mb-3 w-[126px] rotate-[5deg] sm:-ml-10 sm:w-[168px] lg:-ml-14 lg:w-[192px]"
        />
      </div>

      {/* contact shadow, so the group sits rather than floats */}
      <div
        aria-hidden="true"
        className="absolute inset-x-16 -bottom-8 -z-10 h-16 rounded-[100%] bg-black/70 blur-2xl"
      />
    </div>
  );
}
