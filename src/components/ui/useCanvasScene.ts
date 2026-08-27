'use client';

import { useEffect, useRef } from 'react';

/** Draw one frame. `t` is seconds since the scene started. */
export type SceneDraw = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  t: number
) => void;

/**
 * Runs a canvas animation and hands back the ref to attach.
 *
 * Handles the boring parts once so each background is just a draw function:
 * retina scaling, resize, the animation frame loop, and the promise that
 * anyone who asked for reduced motion gets a single still frame instead.
 */
export function useCanvasScene(draw: SceneDraw) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef(draw);

  // Keep the latest draw function without restarting the animation loop.
  useEffect(() => {
    drawRef.current = draw;
  });

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

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    resize();

    if (still) {
      drawRef.current(ctx, width, height, 0);
    } else {
      const start = performance.now();
      const loop = (now: number) => {
        drawRef.current(ctx, width, height, (now - start) / 1000);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (still) drawRef.current(ctx, width, height, 0);
    };

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return ref;
}
