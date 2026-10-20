"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Native modal <dialog>: the browser handles the focus trap, Escape and the
 * inert background. Focus starts on `[data-autofocus]` and goes back to the
 * element that opened it.
 */
export function Dialog({
  open,
  onClose,
  label,
  className = "",
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      opener.current = document.activeElement;
      dialog.showModal();
      // React's autoFocus doesn't set the attribute the dialog looks for.
      dialog.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      data-lenis-prevent
      onClose={() => {
        onClose();
        if (opener.current instanceof HTMLElement) opener.current.focus();
      }}
      onClick={(e) => {
        // A click on the dialog element itself is a click on the backdrop.
        if (e.target === e.currentTarget) onClose();
      }}
      className={`w-[calc(100%-2rem)] bg-transparent p-0 text-fg backdrop:bg-black/60 backdrop:backdrop-blur-sm ${className}`}
    >
      {open && children}
    </dialog>
  );
}
