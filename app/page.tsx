"use client";

import Image from 'next/image';
import { motion } from "motion/react";
import { RadialGlow } from "@/app/_components/background";
import { Button, buttonSize, buttonVariant } from "@/app/_components/button";
import ResumeDownloadButtonDynamic from '@/app/_components/resume/ResumeDownloadButtonDynamic';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 lg:p-24 relative overflow-hidden"
    >
      <RadialGlow />

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <header className="flex-1 space-y-6 z-10">
          <div className="flex items-center gap-3">
            <span className="text-sm tracking-[0.3em] font-medium text-gray-400 uppercase">Hello I'm</span>
          </div>

          <h1 id="home-heading" className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter">
            MARCUS <br />
            <span className="text-transparent border-text stroke-primary" style={{ WebkitTextStroke: '2px #5ef0a5' }}>
              ENGINEER
            </span>
          </h1>

          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            Versatile Lead Software Engineer with extensive experience across the full development lifecycle, from architectural design to cloud deployment. Certified in AWS and Terraform, specializing in building automated infrastructure and scalable full stack applications. Passionate about leveraging AI to optimize development workflows and enhance product capabilities. Committed to driving engineering excellence through rigorous code standards and the integration of emerging technologies to solve high-impact business challenges.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              Download Resume <ChevronRight size={20} />
            </button> */}
            {/* <Button className="font-bold transition-transform hover:scale-105" size={buttonSize.large}>
              Download Resume
            </Button> */}
            <ResumeDownloadButtonDynamic />
            <Button variant={buttonVariant.outline} size={buttonSize.large}>View Work</Button>
            {/* <button className="px-8 py-4 border border-white/20 hover:border-primary transition-colors rounded-lg font-bold flex items-center gap-2">
              View Work
            </button> */}
          </div>
        </header>

        <div className="flex-1 " aria-hidden="true">
          <div className="relative aspect-square w-full max-w-md mx-auto z-0">
            <Image
              src="/images/splash-art.webp"
              fill
              alt="Splash Art"
              className="object-contain lg:scale-175"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
