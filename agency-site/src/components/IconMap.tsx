import {
  Smartphone,
  Globe,
  Server,
  Brain,
  Glasses,
  Cpu,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Building2,
  Store,
  Truck,
  UtensilsCrossed,
  GraduationCap,
  Car,
  Factory,
  Rocket,
  BadgeCheck,
  Zap,
  Receipt,
  Layers,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  UserCheck,
  LifeBuoy,
  Award,
  LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Smartphone,
  Globe,
  Server,
  Brain,
  Glasses,
  Cpu,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Building2,
  Store,
  Truck,
  UtensilsCrossed,
  GraduationCap,
  Car,
  Factory,
  Rocket,
  BadgeCheck,
  Zap,
  Receipt,
  Layers,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  UserCheck,
  LifeBuoy,
  Award,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = ICONS[name] ?? Sparkles;
  return <Component className={className} strokeWidth={1.75} />;
}
