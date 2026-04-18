import { Home, Info, LayoutDashboard } from "lucide-react";
import type { Tab } from "../lib/types";
import { tabId } from "../lib/constants";

export const tabs: ReadonlyArray<Tab> = [
  { id: tabId.home, label: "Home", icon: Home, link: "/" },
  { id: tabId.portfolio, label: "Portfolio", icon: LayoutDashboard, link: "/portfolio" },
  { id: tabId.profile, label: "Profile", icon: Info, link: "/profile" },
];
