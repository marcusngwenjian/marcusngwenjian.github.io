"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "./data/tabs";

export const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur-md p-4 rounded-full border border-white/10">
      {tabs.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={item.id}
            href={item.link}
            className={`px-4 py-2 rounded-full transition-colors ${isActive ? "text-[#5ef0a5] bg-white/5" : "text-white/60 hover:text-white"
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
