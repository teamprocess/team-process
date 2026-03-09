"use client";

import { useEffect, useRef } from "react";

interface MeshPoint {
  amplitude: number;
  baseX: number;
  baseY: number;
  phase: number;
  row: number;
  col: number;
  speed: number;
}

interface MeshState {
  cols: number;
  points: MeshPoint[];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function createMesh(width: number, height: number): MeshState {
  const spacing = width < 768 ? 96 : 118;
  const cols = Math.ceil(width / spacing) + 2;
  const rows = Math.ceil(height / spacing) + 2;
  const points: MeshPoint[] = [];

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const offset = row % 2 === 0 ? 0 : spacing / 2;

      points.push({
        amplitude: 4 + Math.random() * 7,
        baseX: col * spacing + offset - spacing / 2,
        baseY: row * spacing - spacing / 2,
        phase: Math.random() * Math.PI * 2,
        row,
        col,
        speed: 0.45 + Math.random() * 0.55,
      });
    }
  }

  return { cols, points };
}

export function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = canvas?.parentElement;
    const host = shell?.parentElement;

    if (!canvas || !shell || !host) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    const pointer = {
      active: false,
      x: 0,
      y: 0,
    };

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let shouldReduceMotion = reduceMotionQuery.matches;
    let mesh = createMesh(shell.clientWidth, shell.clientHeight);
    let frameId = 0;

    const setCanvasSize = () => {
      const rect = shell.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      mesh = createMesh(rect.width, rect.height);
    };

    const draw = (time: number) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const isDark = document.documentElement.classList.contains("dark");
      const glowX = pointer.active ? pointer.x : width * 0.66;
      const glowY = pointer.active ? pointer.y : height * 0.36;
      const baseLineAlpha = isDark ? 0.07 : 0.075;
      const baseDotAlpha = isDark ? 0.13 : 0.13;
      const lineColor = isDark ? "126, 196, 240" : "0, 94, 166";
      const glowColor = isDark ? "86, 184, 240" : "0, 102, 179";

      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        Math.max(width, height) * 0.48
      );

      glow.addColorStop(0, `rgba(${glowColor}, ${isDark ? 0.15 : 0.075})`);
      glow.addColorStop(0.45, `rgba(${glowColor}, ${isDark ? 0.06 : 0.022})`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const animatedPoints = mesh.points.map((point) => {
        const oscillation = shouldReduceMotion ? 0 : time * 0.00055 * point.speed + point.phase;
        const x = point.baseX + Math.sin(oscillation) * point.amplitude;
        const y = point.baseY + Math.cos(oscillation * 0.9) * point.amplitude * 0.65;

        return {
          ...point,
          x,
          y,
        };
      });

      const getPoint = (row: number, col: number) => animatedPoints[row * mesh.cols + col];

      for (const point of animatedPoints) {
        const rightPoint = getPoint(point.row, point.col + 1);
        const bottomPoint = getPoint(point.row + 1, point.col);

        const neighbors = [rightPoint, bottomPoint].filter(Boolean);

        for (const neighbor of neighbors) {
          if (!neighbor) {
            continue;
          }

          const midX = (point.x + neighbor.x) / 2;
          const midY = (point.y + neighbor.y) / 2;
          const pointerDistance = Math.hypot(midX - glowX, midY - glowY);
          const proximity = clamp(1 - pointerDistance / Math.max(width, height), 0, 1);
          const alpha = baseLineAlpha + proximity * (isDark ? 0.095 : 0.085);

          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.strokeStyle = `rgba(${lineColor}, ${alpha})`;
          context.lineWidth = isDark ? 1.02 : 1.05;
          context.stroke();
        }
      }

      for (const point of animatedPoints) {
        const pointerDistance = Math.hypot(point.x - glowX, point.y - glowY);
        const proximity = clamp(1 - pointerDistance / (Math.max(width, height) * 0.52), 0, 1);
        const radius = (isDark ? 1 : 0.95) + proximity * (isDark ? 1.15 : 1.2);
        const alpha = baseDotAlpha + proximity * (isDark ? 0.14 : 0.15);

        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${lineColor}, ${alpha})`;
        context.fill();
      }
    };

    const animate = (time: number) => {
      draw(time);
      frameId = shouldReduceMotion ? 0 : window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = shell.getBoundingClientRect();
      pointer.active = true;
      pointer.x = clamp(event.clientX - rect.left, 0, rect.width);
      pointer.y = clamp(event.clientY - rect.top, 0, rect.height);

      if (shouldReduceMotion) {
        draw(0);
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;

      if (shouldReduceMotion) {
        draw(0);
      }
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      shouldReduceMotion = event.matches;

      if (shouldReduceMotion) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
        draw(0);
        return;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
      draw(0);
    });

    setCanvasSize();
    draw(0);

    if (!shouldReduceMotion) {
      frameId = window.requestAnimationFrame(animate);
    }

    resizeObserver.observe(shell);
    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerleave", handlePointerLeave);
    reduceMotionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
      reduceMotionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div className="process-backdrop-shell pointer-events-none absolute inset-0">
      <canvas
        ref={canvasRef}
        className="process-backdrop-canvas h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
