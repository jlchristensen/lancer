/**
 * Three soft colour fields drifting behind the hero, slowly enough that
 * you notice it only if you stay on the page. No canvas and no JavaScript,
 * so it costs almost nothing.
 */
export function AuroraBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-a absolute -top-32 left-1/4 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(97,114,255,0.30),transparent_65%)] blur-3xl" />
      <div className="aurora-b absolute top-10 -right-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(177,124,245,0.26),transparent_65%)] blur-3xl" />
      <div className="aurora-c absolute -bottom-40 left-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.20),transparent_65%)] blur-3xl" />
    </div>
  );
}
