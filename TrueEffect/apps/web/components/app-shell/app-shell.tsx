"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ElementType, ReactNode } from "react";
import {
  Bell,
  Bookmark,
  FileText,
  Home,
  LayoutDashboard,
  Map,
  MapPin,
  MessageSquareText,
  Search,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";
import { TrueEffectLogo } from "@/components/navigation/true-effect-logo";
import { cn } from "@/lib/utils";
import { userProfile } from "@/lib/mock-data/user-profile";

const desktopNav = [
  { href: "/app/today", label: "Today", icon: LayoutDashboard },
  { href: "/app/my-town", label: "My Town", icon: Home },
  { href: "/app/explorer", label: "Explorer", icon: Search },
  { href: "/app/ask", label: "Ask True Effect", icon: MessageSquareText },
  { href: "/app/watchlist", label: "Watchlist", icon: Bell },
  { href: "/app/saved", label: "Saved", icon: Bookmark },
  { href: "/app/briefs", label: "Briefs", icon: FileText },
  { href: "/app/profile", label: "Profile", icon: User },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

const mobileNav = [
  { href: "/app/today", label: "Today", icon: LayoutDashboard },
  { href: "/app/my-town", label: "My Town", icon: Home },
  { href: "/app/ask", label: "Ask", icon: MessageSquareText },
  { href: "/app/watchlist", label: "Watchlist", icon: Bell },
  { href: "/app/profile", label: "Profile", icon: User },
];

function NavLink({
  href,
  label,
  icon: Icon,
  compact,
}: {
  href: string;
  label: string;
  icon: ElementType;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-textSecondary transition hover:bg-secondary hover:text-textPrimary",
        active && "bg-mainPrimary text-white hover:bg-mainPrimary hover:text-white",
        compact && "flex-col gap-1 px-2 py-2 text-xs",
      )}
      href={href}
    >
      <Icon className={cn("h-5 w-5", compact && "h-5 w-5")} />
      <span>{label}</span>
    </Link>
  );
}

export function LocationChip() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold">
      <MapPin className="h-4 w-4 text-environmentPrimary" />
      {userProfile.city}, {userProfile.state} {userProfile.zip}
    </div>
  );
}

export function UserMenu() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-3 py-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mainPrimary text-sm font-bold text-white">
        A
      </div>
      <div className="hidden text-sm sm:block">
        <p className="font-semibold">{userProfile.name}</p>
        <p className="text-xs text-textSecondary">Mock account</p>
      </div>
    </div>
  );
}

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-border bg-card/90 p-5 backdrop-blur xl:block">
      <TrueEffectLogo />
      <nav aria-label="App navigation" className="mt-8 grid gap-1">
        {desktopNav.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
      <div className="mt-8 rounded-lg border border-border bg-backgroundSoft p-4">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <ShieldCheck className="h-4 w-4 text-lightPrimary" />
          Source visible mode
        </div>
        <p className="mt-2 text-sm text-textSecondary">
          Every mock impact explanation shows source count, confidence, and uncertainty.
        </p>
      </div>
    </aside>
  );
}

export function AppTopbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-backgroundSoft/85 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:ml-72">
        <div className="xl:hidden">
          <TrueEffectLogo />
        </div>
        <div className="hidden xl:block">
          <LocationChip />
        </div>
        <div className="flex items-center gap-3">
          <Link
            className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 font-medium text-textPrimary md:inline-flex"
            href="/app/explorer"
          >
            <Map className="h-4 w-4 text-mainPrimary" />
            Explore impacts
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

export function MobileTabBar() {
  return (
    <nav
      aria-label="Mobile app navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-2 py-2 shadow-[0_-10px_30px_rgba(21,32,51,0.08)] backdrop-blur xl:hidden"
    >
      <div className="grid grid-cols-5 gap-1">
        {mobileNav.map((item) => (
          <NavLink compact key={item.href} {...item} />
        ))}
      </div>
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-backgroundSoft">
      <AppSidebar />
      <AppTopbar />
      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 xl:ml-72 xl:pb-12">{children}</main>
      <MobileTabBar />
    </div>
  );
}
