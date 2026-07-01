import {
  Bolt,
  CircleDot,
  Construction,
  Factory,
  Hexagon,
  LucideIcon,
  Settings2,
  Waypoints
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bolt: Bolt,
  hexagon: Hexagon,
  screw: Settings2,
  "circle-dot": CircleDot,
  construction: Construction,
  waypoints: Waypoints,
  factory: Factory
};

export function ProductIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const Icon = iconMap[icon] ?? Bolt;

  return <Icon className={className} strokeWidth={1.5} />;
}
