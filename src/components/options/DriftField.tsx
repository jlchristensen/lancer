'use client';

import { useRef } from 'react';
import { useCanvasScene } from './useCanvasScene';

type Particle = { x: number; y: number; life: number; tint: boolean };

const COUNT = 420;
const SPEED = 0.9;
const MAX_LIFE = 320;

/**
 * A few hundred motes following an invisible current, each leaving a thin
 * trail that never quite fades. Reads like weather on a chart. Mostly bone,
 * with the Lancer green surfacing on roughly one mote in twelve.
 */
export function DriftField({ className = '' }: { className?: string }) {
  const particles = useRef<Particle[]>([]);

  const ref = useCanvasScene((ctx, width, height, t) => {
    if (width < 2 || height < 2) return;

    if (particles.current.length === 0) {
      particles.current = Array.from({ length: COUNT }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        life: Math.random() * MAX_LIFE,
        tint: i % 12 === 0,
      }));
    }

    // Instead of clearing, lay down a veil. That is what leaves the trails.
    ctx.fillStyle = 'rgba(8, 8, 10, 0.055)';
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 1;

    for (const particle of particles.current) {
      const angle =
        (Math.sin(particle.x * 0.0016 + t * 0.15) +
          Math.cos(particle.y * 0.0021 - t * 0.12) +
          Math.sin((particle.x + particle.y) * 0.001 + t * 0.08)) *
        1.7;

      const nextX = particle.x + Math.cos(angle) * SPEED;
      const nextY = particle.y + Math.sin(angle) * SPEED;

      ctx.strokeStyle = particle.tint
        ? 'rgba(46, 139, 87, 0.30)'
        : 'rgba(236, 229, 216, 0.16)';
      ctx.beginPath();
      ctx.moveTo(particle.x, particle.y);
      ctx.lineTo(nextX, nextY);
      ctx.stroke();

      particle.x = nextX;
      particle.y = nextY;
      particle.life += 1;

      const escaped =
        particle.x < -20 ||
        particle.x > width + 20 ||
        particle.y < -20 ||
        particle.y > height + 20;

      if (escaped || particle.life > MAX_LIFE) {
        particle.x = Math.random() * width;
        particle.y = Math.random() * height;
        particle.life = 0;
      }
    }
  });

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
