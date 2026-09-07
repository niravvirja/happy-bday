import { X } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  name: string;
  onClose: () => void;
  closing: boolean;
  children: ReactNode;
};

/**
 * The sheet that lifts out of the envelope. Fills the viewport neatly on
 * phones and settles into a letter-proportioned card on larger screens.
 */
export function Letter({ name, onClose, closing, children }: Props) {
  return (
    <div className="absolute inset-0 z-30 grid place-items-center px-4 py-[max(1rem,env(safe-area-inset-top))]">
      <article
        className="relative flex w-full max-w-[34rem] flex-col overflow-hidden rounded-[1.25rem] letter-ink"
        style={{
          height: "min(78dvh, 40rem)",
          border: "1px solid color-mix(in oklab, oklch(0.42 0 0) 80%, transparent)",
          transformOrigin: "50% 100%",
          animation: closing
            ? "letter-rise 0.4s ease-in reverse forwards"
            : "letter-rise 0.75s cubic-bezier(0.22, 0.9, 0.25, 1) both",
        }}
        aria-label={`A birthday letter for ${name}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fold the letter back"
          className="absolute right-2 top-2 z-20 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-primary/20 bg-[oklch(0.13_0_0)] text-primary shadow-md transition-transform active:scale-90 sm:right-3 sm:top-3 sm:h-7 sm:w-7"
        >
          <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </button>


        <div className="relative z-10 min-h-0 flex-1 grid place-items-center overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
          {children}
        </div>
      </article>
    </div>
  );
}
