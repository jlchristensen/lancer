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
        className="absolute inset-x-[-9rem] top-[6%] bottom-[-8rem] -z-10 bg-[radial-gradient(68%_72%_at_50%_58%,rgba(255,255,255,0.9),rgba(214,190,255,0.35)_55%,transparent_80%)] blur-2xl"
      />

      <div className="flex items-end justify-center">
        <PhoneFrame
          src="/products/chip-phone.png"
          alt="Chip, a poker learning app, on a phone"
          screenBg="#0c0f14"
          className="z-20 -mr-7 w-[96px] translate-y-5 rotate-[-6deg] sm:-mr-10 sm:w-[124px] lg:-mr-12 lg:w-[148px]"
        />

        <BrowserFrame
          src="/products/sage-desktop.png"
          alt="Sage, an adaptive learning app, in a browser window"
          url="learningwithsage.com"
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
        className="absolute inset-x-20 -bottom-9 -z-10 h-14 rounded-[100%] bg-black/15 blur-2xl"
      />
    </div>
  );
}
