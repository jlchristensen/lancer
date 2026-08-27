'use client';

import { useCanvasScene } from './useCanvasScene';

type Ring = {
  scaleX: number;
  scaleY: number;
  tilt: number; // starting rotation
  rate: number; // radians per second
  alpha: number;
  mote: boolean; // does a point ride this one
};

const RINGS: Ring[] = [
  { scaleX: 0.95, scaleY: 0.34, tilt: 0.2, rate: 0.014, alpha: 0.2, mote: true },
  { scaleX: 0.78, scaleY: 0.62, tilt: 1.1, rate: -0.019, alpha: 0.16, mote: false },
  { scaleX: 1.15, scaleY: 0.5, tilt: 2.4, rate: 0.011, alpha: 0.13, mote: true },
  { scaleX: 0.58, scaleY: 0.58, tilt: 0.7, rate: -0.026, alpha: 0.22, mote: false },
  { scaleX: 1.35, scaleY: 0.78, tilt: 1.9, rate: 0.008, alpha: 0.09, mote: false },
];

/**
 * A handful of thin ellipses turning at their own speeds, with a point
 * riding two of them. Closer to an orrery than to artwork, and slow enough
 * that it reads as still until you look twice.
 */
export function OrbitField({ className = '' }: { className?: string }) {
  const ref = useCanvasScene((ctx, width, height, t) => {
    ctx.clearRect(0, 0, width, height);
    if (width < 2 || height < 2) return;

    const cx = width * 0.68;
    const cy = height * 0.48;
    const unit = Math.min(width, height) * 0.46;
    ctx.lineWidth = 1;

    for (const ring of RINGS) {
      const angle = ring.tilt + t * ring.rate;
      const rx = unit * ring.scaleX;
      const ry = unit * ring.scaleY;

      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, angle, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(236, 229, 216, ${ring.alpha})`;
      ctx.stroke();

      if (!ring.mote) continue;

      // A single point travelling the ring, faster than the ring turns.
      const travel = t * (ring.rate * 9 + 0.08);
      const px = Math.cos(travel) * rx;
      const py = Math.sin(travel) * ry;
      const x = cx + px * Math.cos(angle) - py * Math.sin(angle);
      const y = cy + px * Math.sin(angle) + py * Math.cos(angle);

      const halo = ctx.createRadialGradient(x, y, 0, x, y, 26);
      halo.addColorStop(0, 'rgba(236, 229, 216, 0.5)');
      halo.addColorStop(1, 'rgba(236, 229, 216, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(x, y, 26, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 252, 245, 0.9)';
      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
