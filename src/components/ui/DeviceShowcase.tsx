import { BrowserFrame, PhoneFrame } from './DeviceFrames';

/**
 * The hero centrepiece. Proportions matter more than anything here: the
 * browser is the subject, the phones are accents tucked low against its
 * corners, and nothing may ever cover the browser chrome or the floating
 * cards. Sizes were set by looking at the rendered page, not arithmetic.
 */
export function DeviceShowcase() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* stage bloom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[-9rem] top-[6%] bottom-[-8rem] -z-10 bg-[radial-gradient(68%_72%_at_50%_58%,rgba(47,125,255,0.5),rgba(122,86,255,0.26)_50%,transparent_76%)] blur-2xl"
      />

      <div className="flex items-end justify-center">
        <PhoneFrame
          src="/products/sage.png"
          alt="Sage, an adaptive learning app, on a phone"
          screenBg="#f5f3ef"
          light
          className="z-20 -mr-7 w-[96px] translate-y-5 rotate-[-6deg] sm:-mr-10 sm:w-[124px] lg:-mr-12 lg:w-[148px]"
        />

        <BrowserFrame
          src="/products/chip.png"
          alt="Chip, a poker learning app, in a browser window"
          url="playwithchip.com"
          priority
          className="z-10 min-w-0 max-w-3xl flex-1"
        />

        <PhoneFrame
          src="/products/tsp.png"
          alt="The Social Project, a nightly question app, on a phone"
          screenBg="#07100b"
          className="z-20 -ml-7 w-[96px] translate-y-5 rotate-[6deg] sm:-ml-10 sm:w-[124px] lg:-ml-12 lg:w-[148px]"
        />
      </div>

      {/* contact shadow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-20 -bottom-9 -z-10 h-14 rounded-[100%] bg-black/70 blur-2xl"
      />
    </div>
  );
}
