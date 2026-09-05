export function TrustStrip({ className = "" }: { className?: string }) {
  const items = ["No credit card", "Paid spots labeled", "Local pages"];

  return (
    <p
      className={`text-sm font-medium tracking-wide text-muted-foreground ${className}`}
    >
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 ? (
            <span aria-hidden="true" className="px-2 text-border">
              ·
            </span>
          ) : null}
          {item}
        </span>
      ))}
    </p>
  );
}
