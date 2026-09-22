/**
 * Chanhdai-style section spacer.
 *
 * A thin, full-viewport-width hairline that separates sections inside
 * the unified border rail container. Uses `screen-line-top` or
 * `screen-line-bottom` to create a 1px line that stretches across the
 * full viewport width, regardless of container width.
 *
 * Optionally adds a small height spacer for visual breathing room.
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={`screen-line-top screen-line-bottom flex h-4 ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
