"use client";

import { motion } from "motion/react";
import { User, ExternalLink, ChevronRight } from "lucide-react";
import { RadialGlow } from "@/app/_components/background";
import { Button, buttonSize, buttonVariant } from "@/app/_components/button";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 relative overflow-hidden"
    >
      <RadialGlow />

      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <header className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">
              <User size={20} className="text-primary" />
            </div> */}
            <span className="text-sm tracking-[0.3em] font-medium text-gray-400 uppercase">Hello I'm</span>
          </div>

          <h1 id="home-heading" className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter">
            MARCUS <br />
            <span className="text-transparent border-text stroke-primary" style={{ WebkitTextStroke: '2px #5ef0a5' }}>
              ENGINEER
            </span>
          </h1>

          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            Building dynamic and scalable web applications with precision.
            A passionate full-stack developer skilled in Next.js, TypeScript, and high-performance systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              Download Resume <ChevronRight size={20} />
            </button> */}
            <Button className="font-bold transition-transform hover:scale-105" size={buttonSize.Large}>
              Download Resume
            </Button>
            <Button variant={buttonVariant.Outline} size={buttonSize.Large}>View Work</Button>
            {/* <button className="px-8 py-4 border border-white/20 hover:border-primary transition-colors rounded-lg font-bold flex items-center gap-2">
              View Work
            </button> */}
          </div>

          <div className="flex gap-6 pt-8">
            {[
              { Icon: ExternalLink, label: 'GitHub' },
              { Icon: ExternalLink, label: 'LinkedIn' },
              { Icon: ExternalLink, label: 'Portfolio' }
            ].map(({ Icon, label }, i) => (
              <motion.a
                key={i} href="#"
                aria-label={label}
                whileHover={{ y: -5, color: '#5ef0a5' }}
                className="text-gray-500 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </header>

        <div className="flex-1 relative" aria-hidden="true">
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700">
            <div className="w-full h-full bg-[#151515] border border-white/10 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-1 w-24 bg-primary mb-4" />
                <p className="text-xs uppercase tracking-widest text-primary">Senior Software Architect</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
        </div>
      </div>
    </motion.section>
  );
}
