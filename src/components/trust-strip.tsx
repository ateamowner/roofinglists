export function TrustStrip({ className = "" }: { className?: string }) {
  const items = ["No credit card", "Paid spots labeled", "Local city pages"];

  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-0 gap-y-1 text-[13px] font-medium leading-[18px] tracking-wide text-muted-foreground ${className}`}
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center">
          {index > 0 ? (
            <span aria-hidden="true" className="px-2 text-border">
              ·
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  );
}
