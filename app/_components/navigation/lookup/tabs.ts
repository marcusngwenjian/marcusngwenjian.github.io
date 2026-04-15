import { Home, Info, LayoutDashboard, type LucideIcon } from "lucide-react";

export const tabId = {
  home: "home",
  portfolio: "portfolio",
  profile: "profile"
} as const;

export type TabId = (typeof tabId)[keyof typeof tabId];

type Tab = {
  readonly id: TabId;
  readonly label: string;
  readonly icon: LucideIcon;
  readonly link: string;
}

export const tabs: ReadonlyArray<Tab> = [
  { id: tabId.home, label: "Home", icon: Home, link: "/" },
  { id: tabId.portfolio, label: "Portfolio", icon: LayoutDashboard, link: "/portfolio" },
  { id: tabId.profile, label: "Profile", icon: Info, link: "/profile" },
];
