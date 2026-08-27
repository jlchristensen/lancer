'use client';

import { useCanvasScene } from './useCanvasScene';

const SPACING = 26; // pixels between dots in the matrix
const RATE = 0.32; // radians per second

/**
 * A dot matrix with a sweep turning slowly through it, the way a radar
 * screen lights up what it just passed and lets it decay. Sodium amber on
 * pitch, one colour only.
 */
export function SweepField({ className = '' }: { className?: string }) {
  const ref = useCanvasScene((ctx, width, height, t) => {
    ctx.clearRect(0, 0, width, height);
    if (width < 2 || height < 2) return;

    const originX = width * 0.82;
    const originY = height * 0.46;
    const reach = Math.hypot(width, height);
    const sweep = (t * RATE) % (Math.PI * 2);

    // Faint range rings, so the sweep has something to travel over.
    ctx.strokeStyle = 'rgba(139, 133, 124, 0.10)';
    ctx.lineWidth = 1;
    for (let ring = 1; ring <= 5; ring++) {
      ctx.beginPath();
      ctx.arc(originX, originY, (reach / 5.5) * ring, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (let x = (width % SPACING) / 2; x < width; x += SPACING) {
      for (let y = (height % SPACING) / 2; y < height; y += SPACING) {
        const dx = x - originX;
        const dy = y - originY;
        const distance = Math.hypot(dx, dy);
        if (distance > reach) continue;

        // How far behind the sweep line this dot sits, in radians.
        let behind = sweep - Math.atan2(dy, dx);
        while (behind < 0) behind += Math.PI * 2;
        while (behind > Math.PI * 2) behind -= Math.PI * 2;

        const glow = Math.exp(-behind * 2.6);
        const fade = 1 - distance / reach;

        // Every dot is always faintly there. The sweep only adds to it.
        const base = 0.1 * fade;
        const lit = glow * fade * 0.85;

        if (lit > 0.02) {
          ctx.fillStyle = `rgba(233, 162, 59, ${(base + lit).toFixed(3)})`;
          const size = 1 + lit * 2.1;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        } else {
          ctx.fillStyle = `rgba(139, 133, 124, ${base.toFixed(3)})`;
          ctx.fillRect(x - 0.5, y - 0.5, 1, 1);
        }
      }
    }

    // The sweep line itself, barely there.
    const gradient = ctx.createLinearGradient(
      originX,
      originY,
      originX + Math.cos(sweep) * reach,
      originY + Math.sin(sweep) * reach
    );
    gradient.addColorStop(0, 'rgba(233, 162, 59, 0.22)');
    gradient.addColorStop(1, 'rgba(233, 162, 59, 0)');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + Math.cos(sweep) * reach, originY + Math.sin(sweep) * reach);
    ctx.stroke();
  });

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
