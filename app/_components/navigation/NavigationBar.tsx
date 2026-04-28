'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tabs } from './data/tabs';

export const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-8 left-1/2 flex -translate-x-1/2 gap-4 rounded-full border border-white/10 bg-black/50 p-4 backdrop-blur-md">
      {tabs.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={item.id}
            href={item.link}
            className={`rounded-full px-4 py-2 transition-colors ${
              isActive
                ? 'bg-white/5 text-[#5ef0a5]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
