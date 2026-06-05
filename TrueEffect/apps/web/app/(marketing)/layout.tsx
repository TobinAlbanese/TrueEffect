import type { ReactNode } from "react";
import { MarketingPageShell } from "@/components/marketing/marketing-components";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <MarketingPageShell>{children}</MarketingPageShell>;
}
