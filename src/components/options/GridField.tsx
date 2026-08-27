/**
 * A faint grid that slides upward forever, with a soft sheen passing down
 * it. Reads as an instrument panel rather than artwork. Pure CSS.
 */
export function GridField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]">
        <div
          className="grid-drift absolute inset-x-0 -top-16 h-[calc(100%+8rem)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.10) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>
      <div className="sheen absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,transparent,rgba(97,114,255,0.16),transparent)]" />
    </div>
  );
}
