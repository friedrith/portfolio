import type { ComponentProps } from "react";

export function Keycap({
  size = "md",
  className = "",
  ...props
}: { size?: "sm" | "md" } & ComponentProps<"kbd">) {
  return (
    <kbd
      {...props}
      className={`keycap ${size === "sm" ? "!h-5 !min-w-5 !text-[10px]" : ""} ${className}`}
    />
  );
}
