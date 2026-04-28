'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { RadialGlow } from '@/app/_components/background';
import { Button, buttonSize, buttonVariant } from '@/app/_components/button';
import { ResumeDownloadButton } from '@/app/_components/resume';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8 md:flex-row lg:p-24"
    >
      <RadialGlow />

      <div className="flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row">
        <header className="z-10 flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
              Hello {"I'm"}
            </span>
          </div>

          <h1
            id="home-heading"
            className="text-7xl leading-[0.85] font-black tracking-tighter md:text-9xl"
          >
            MARCUS <br />
            <span
              className="border-text stroke-primary text-transparent"
              style={{ WebkitTextStroke: '2px #5ef0a5' }}
            >
              ENGINEER
            </span>
          </h1>

          <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
            Versatile Lead Software Engineer with extensive experience across
            the full development lifecycle, from architectural design to cloud
            deployment. Certified in AWS and Terraform, specializing in building
            automated infrastructure and scalable full stack applications.
            Passionate about leveraging AI to optimize development workflows and
            enhance product capabilities. Committed to driving engineering
            excellence through rigorous code standards and the integration of
            emerging technologies to solve high-impact business challenges.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* <button className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              Download Resume <ChevronRight size={20} />
            </button> */}
            {/* <Button className="font-bold transition-transform hover:scale-105" size={buttonSize.large}>
              Download Resume
            </Button> */}
            <ResumeDownloadButton />
            <Button variant={buttonVariant.outline} size={buttonSize.large}>
              View Work
            </Button>
            {/* <button className="px-8 py-4 border border-white/20 hover:border-primary transition-colors rounded-lg font-bold flex items-center gap-2">
              View Work
            </button> */}
          </div>
        </header>

        <div className="flex-1" aria-hidden="true">
          <div className="relative z-0 mx-auto aspect-square w-full max-w-md">
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
