import { useEffect, useRef } from "react";

/**
 * Live microphone spectrum. Reads the band values straight from the ref each
 * frame and writes them onto the bars, so the mic never re-renders React.
 */
export function VoiceSpectrum({
  spectrumRef,
  bars = 28,
}: {
  spectrumRef: { current: Float32Array };
  bars?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const draw = () => {
      const node = containerRef.current;
      const values = spectrumRef.current;
      if (node) {
        const children = node.children;
        for (let i = 0; i < children.length; i += 1) {
          const value = values[Math.floor((i / children.length) * values.length)] ?? 0;
          const bar = children[i] as HTMLElement;
          bar.style.transform = `scaleY(${Math.max(0.06, Math.min(1, value))})`;
          bar.style.opacity = `${0.35 + Math.min(1, value) * 0.65}`;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [spectrumRef]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="flex h-9 w-44 items-end justify-between gap-[2px]"
    >
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="h-full w-full origin-bottom rounded-full bg-primary-foreground"
          style={{ transform: "scaleY(0.06)" }}
        />
      ))}
    </div>
  );
}
