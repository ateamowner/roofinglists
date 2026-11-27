import { pageDisclosure, site, type City } from "@/config/site";

export function Disclosure({
  city,
  className = "",
}: {
  city?: City;
  className?: string;
}) {
  const copy = city ? pageDisclosure(city) : site.disclosure;
  return (
    <p className={`text-sm leading-6 text-muted-foreground ${className}`}>
      {copy}
    </p>
  );
}
