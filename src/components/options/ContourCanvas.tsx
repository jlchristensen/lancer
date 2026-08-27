'use client';

import { useEffect, useRef } from 'react';

type Blob = {
  cx: number; // centre, as a fraction of width
  cy: number; // centre, as a fraction of height
  size: number; // base radius, as a fraction of the smaller edge
  rings: number;
  seed: number;
  speed: number;
};

const BLOBS: Blob[] = [
  { cx: 0.42, cy: 0.36, size: 0.3, rings: 26, seed: 0, speed: 0.06 },
  { cx: 0.74, cy: 0.72, size: 0.26, rings: 22, seed: 3.1, speed: 0.045 },
];

/**
 * Slow topographic contour lines, the way height lines sit on a map.
 * Each ring is a circle whose radius wobbles with a few stacked sine
 * waves, and the whole field drifts. Purely decorative, so it is hidden
 * from screen readers and sits still for anyone who asked for less motion.
 */
export function ContourCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const radiusAt = (angle: number, t: number, seed: number, ring: number) => {
      const drift = t + seed;
      return (
        1 +
        0.26 * Math.sin(angle * 2 + drift) +
        0.15 * Math.sin(angle * 3 - drift * 1.3 + ring * 0.06) +
        0.08 * Math.sin(angle * 5 + drift * 0.7)
      );
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const minEdge = Math.min(width, height);

      const gradient = ctx.createLinearGradient(0, height, width, 0);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.85)');
      gradient.addColorStop(0.5, 'rgba(97, 114, 255, 0.85)');
      gradient.addColorStop(1, 'rgba(177, 124, 245, 0.85)');

      ctx.lineWidth = 1;

      for (const blob of BLOBS) {
        const cx = blob.cx * width;
        const cy = blob.cy * height;
        const base = blob.size * minEdge;
        const time = t * blob.speed;

        for (let ring = 0; ring < blob.rings; ring++) {
          // Inner rings are brightest, so the shape reads as a peak.
          const falloff = 1 - ring / blob.rings;
          ctx.globalAlpha = 0.1 + falloff * 0.45;
          ctx.strokeStyle = gradient;
          ctx.beginPath();

          const scale = base * (0.18 + (ring / blob.rings) * 0.95);

          for (let step = 0; step <= 90; step++) {
            const angle = (step / 90) * Math.PI * 2;
            const r = scale * radiusAt(angle, time, blob.seed, ring);
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r * 0.82;
            if (step === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }

          ctx.closePath();
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
    };

    resize();

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      draw(0);
    } else {
      const start = performance.now();
      const loop = (now: number) => {
        draw((now - start) / 1000);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (prefersReduced) draw(0);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
