"use client";
import React, { useEffect, useRef } from "react";

// Animated network/constellation background inspired by the provided image.
// Lightweight and responsive; runs behind all content.
export default function NetworkBackground({ density = 0.00012, speed = 0.18, maxPoints = 140 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Rebuild points according to area and density
      const desired = Math.min(maxPoints, Math.max(60, Math.floor(w * h * density)));
      const pts = [];
      for (let i = 0; i < desired; i++) {
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
      pointsRef.current = pts;
    };

    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window;
      ctx.clearRect(0, 0, w, h);

      const pts = pointsRef.current;
      // Move points
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // Draw connections
      const maxDist = Math.min(160, Math.max(90, Math.hypot(w, h) * 0.08));
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // node
        ctx.beginPath();
        ctx.fillStyle = "rgba(125,211,252,0.85)"; // sky-300 like
        ctx.arc(p.x, p.y, 1.25, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxDist * maxDist) continue;
          const d = Math.sqrt(d2);
          const alpha = Math.max(0, 1 - d / maxDist) * 0.6;
          ctx.strokeStyle = `rgba(56,189,248,${alpha})`; // cyan-400 lines
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed, maxPoints]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* Deep blue gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071220] via-[#0a1830] to-[#0b1222]" />
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(56,189,248,0.10),transparent_70%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
