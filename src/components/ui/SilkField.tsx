'use client';

import { useCanvasScene } from './useCanvasScene';

const LINES = 38;
const POINTS = 110;

/**
 * Long lines drifting across the page like silk in slow air. Nothing is
 * filled in, so the lines pass through each other and the whole thing stays
 * airy rather than solid. Cool and desaturated, well under the type.
 */
export function SilkField({ className = '' }: { className?: string }) {
  const ref = useCanvasScene((ctx, width, height, t) => {
    ctx.clearRect(0, 0, width, height);
    if (width < 2 || height < 2) return;

    const spacing = height / (LINES - 6);
    ctx.lineWidth = 1;

    for (let line = 0; line < LINES; line++) {
      const seat = line / (LINES - 1);
      const baseY = line * spacing - spacing * 3;

      // Each line runs at its own pace, so they never march in step.
      const drift = t * (0.09 + (line % 5) * 0.012);
      const swell = spacing * (2.6 + Math.sin(line * 0.7) * 1.4);

      ctx.beginPath();
      for (let p = 0; p <= POINTS; p++) {
        const u = p / POINTS;
        const x = u * width;

        // A soft envelope keeps the movement away from the very edges.
        const envelope = Math.sin(u * Math.PI) ** 0.7;
        const wave =
          Math.sin(u * 3.1 + drift + line * 0.22) * 0.6 +
          Math.sin(u * 5.7 - drift * 1.4 + line * 0.11) * 0.28 +
          Math.sin(u * 1.6 + drift * 0.6) * 0.34;

        ctx.lineTo(x, baseY + wave * swell * envelope);
      }

      // Brightest through the middle band, falling away top and bottom.
      const glow = Math.sin(seat * Math.PI) ** 1.6;
      ctx.strokeStyle = `rgba(150, 178, 208, ${(0.05 + glow * 0.22).toFixed(3)})`;
      ctx.stroke();
    }
  });

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
