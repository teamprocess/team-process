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

function getGlowAnchor(width: number, height: number) {
  if (width < 768) {
    return {
      x: width * 0.24,
      y: height * 0.18,
    };
  }

  return {
    x: width * 0.16,
    y: height * 0.2,
  };
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

    if (!canvas || !shell) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

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
      const glowAnchor = getGlowAnchor(width, height);
      const glowX = glowAnchor.x;
      const glowY = glowAnchor.y;
      const baseLineAlpha = isDark ? 0.082 : 0.078;
      const baseDotAlpha = isDark ? 0.145 : 0.134;
      const lineColor = isDark ? "176, 173, 166" : "112, 116, 126";
      const glowColor = isDark ? "245, 238, 221" : "138, 192, 255";

      context.clearRect(0, 0, width, height);

      const glow = context.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        Math.max(width, height) * (isDark ? 0.5 : 0.56)
      );

      glow.addColorStop(0, `rgba(${glowColor}, ${isDark ? 0.28 : 0.17})`);
      glow.addColorStop(0.3, `rgba(${glowColor}, ${isDark ? 0.18 : 0.08})`);
      glow.addColorStop(0.55, `rgba(${glowColor}, ${isDark ? 0.1 : 0.025})`);
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      const coreGlow = context.createRadialGradient(
        glowX,
        glowY,
        0,
        glowX,
        glowY,
        Math.max(width, height) * (isDark ? 0.16 : 0.19)
      );

      coreGlow.addColorStop(0, isDark ? "rgba(255, 247, 229, 0.38)" : "rgba(172, 213, 255, 0.24)");
      coreGlow.addColorStop(0.48, isDark ? "rgba(236, 228, 207, 0.14)" : "rgba(138, 192, 255, 0.05)");
      coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = coreGlow;
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
          const alpha = baseLineAlpha + proximity * (isDark ? 0.13 : 0.12);

          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(neighbor.x, neighbor.y);
          context.strokeStyle = `rgba(${lineColor}, ${alpha})`;
          context.lineWidth = isDark ? 1.06 : 1.08;
          context.stroke();
        }
      }

      for (const point of animatedPoints) {
        const pointerDistance = Math.hypot(point.x - glowX, point.y - glowY);
        const proximity = clamp(1 - pointerDistance / (Math.max(width, height) * 0.52), 0, 1);
        const radius = (isDark ? 1.05 : 1.02) + proximity * (isDark ? 1.4 : 1.26);
        const alpha = baseDotAlpha + proximity * (isDark ? 0.19 : 0.18);

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
    reduceMotionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
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
