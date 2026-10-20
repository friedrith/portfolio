import type { ComponentProps, ReactNode } from "react";

/** macOS-style app window, after Raycast: traffic-light dots, a title and optional metadata. */
export function AppWindow({
  title,
  meta,
  className = "",
  children,
  ...props
}: { title?: ReactNode; meta?: ReactNode } & ComponentProps<"div">) {
  return (
    <div {...props} className={`rc-window overflow-hidden ${className}`}>
      <div className="rc-titlebar">
        <span className="rc-dot" aria-hidden />
        <span className="rc-dot" aria-hidden />
        <span className="rc-dot" aria-hidden />
        {title && <span className="ml-3 truncate font-mono text-[11px] text-faint">{title}</span>}
        {meta && <span className="ml-auto shrink-0 font-mono text-[11px] text-faint">{meta}</span>}
      </div>
      {children}
    </div>
  );
}
