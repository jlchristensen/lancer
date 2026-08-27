'use client';

import { useCanvasScene } from './useCanvasScene';

const SPEED = 9; // pixels per second the whole field climbs
const POINTS = 96;

/** Deterministic pseudo-random in 0..1, so a ridge always looks like itself. */
function hash(n: number) {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Stacked ridgelines climbing slowly up the page, each one occluding the
 * ones behind it. No colour at all, just bone lines on pitch. The peaks
 * drift and breathe rather than repeating on a loop.
 */
export function RidgeField({ className = '' }: { className?: string }) {
  const ref = useCanvasScene((ctx, width, height, t) => {
    ctx.clearRect(0, 0, width, height);
    if (width < 2 || height < 2) return;

    const spacing = Math.max(16, height / 26);
    const rows = Math.ceil(height / spacing) + 6;
    const travelled = t * SPEED;
    const offset = travelled % spacing;
    const firstIndex = Math.floor(travelled / spacing);

    for (let row = rows; row >= 0; row--) {
      const index = firstIndex + row;
      const baseY = row * spacing - offset;

      // Two peaks per ridge, wandering horizontally at their own pace.
      const centreA = 0.2 + hash(index) * 0.35 + Math.sin(t * 0.08 + index) * 0.04;
      const centreB = 0.55 + hash(index + 91) * 0.35 + Math.cos(t * 0.06 + index) * 0.04;
      const amp = spacing * (1.1 + hash(index + 17) * 2.9);
      const ampB = spacing * (0.5 + hash(index + 53) * 1.9);

      ctx.beginPath();
      for (let p = 0; p <= POINTS; p++) {
        const u = p / POINTS;
        const x = u * width;

        const envA = Math.exp(-((u - centreA) ** 2) / 0.012);
        const envB = Math.exp(-((u - centreB) ** 2) / 0.006);

        const detail =
          Math.sin(u * 26 + index * 1.7 + t * 0.5) * 0.34 +
          Math.sin(u * 51 - index * 0.9) * 0.18 +
          Math.sin(u * 13 + t * 0.3) * 0.2;

        const lift = envA * amp * (0.72 + detail * 0.5) + envB * ampB * (0.6 + detail * 0.4);
        const y = baseY - Math.max(0, lift);

        if (p === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Close the shape downward and fill, so this ridge hides the ones behind.
      ctx.lineTo(width, baseY + spacing * 4);
      ctx.lineTo(0, baseY + spacing * 4);
      ctx.closePath();
      ctx.fillStyle = '#08080a';
      ctx.fill();

      // Ridges nearest the middle of the frame read brightest.
      const depth = baseY / height;
      const alpha = 0.1 + 0.42 * Math.sin(Math.min(Math.max(depth, 0), 1) * Math.PI);
      ctx.strokeStyle = `rgba(236, 229, 216, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
