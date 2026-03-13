import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}
      {...props}
    />
  );
}
