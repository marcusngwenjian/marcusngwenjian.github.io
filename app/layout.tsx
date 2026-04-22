import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { NavigationBar } from "@/app/_components/navigation";
import { Footer } from "@/app/_components/html";
import { Wallpaper } from "@/app/_components/background";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Reference: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: {
    template: "%s | Marcus Ng Wen Jian",
    default: "Marcus Ng Wen Jian",
  },
  description: "Hi, I'm Marcus! A Singapore-based Software Engineer. I build digital solutions by day and conquer virtual realms and new countries by night. Discover my projects and journey here.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="bg-[#0a0a0a] text-white selection:bg-[#5ef0a5] selection:text-black font-sans min-h-screen">
//         <main aria-live="polite">
//           {children}
//         </main>
//         <NavigationBar />
//         {/* Decorative Grid Background */}
//         <div
//           className="fixed inset-0 pointer-events-none opacity-[0.03]"
//           aria-hidden="true"
//           style={{
//             backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
//             backgroundSize: '40px 40px'
//           }}
//         />
//         <Footer />
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen">
        <main aria-live="polite">
          {children}
        </main>
        <NavigationBar />
        <Footer />
        <Wallpaper />
      </body>
    </html>
  );
}
