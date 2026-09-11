export const trustChips = [
  "No credit card",
  "Paid spots labeled",
  "We hold your request",
] as const;

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-2 text-[13px] font-medium leading-[18px] ${className}`}
    >
      {trustChips.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-card px-3 py-1.5 text-foreground shadow-[0_12px_32px_rgba(19,32,43,0.10)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
