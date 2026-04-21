"use client";

import { motion } from "motion/react";
import { MapPin, ExternalLink, Terminal, Code2, PlayCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/card";
import { Separator } from "@/app/_components/separator";
import { SkillSectionCard } from "./_components/SkillSectionCard";
import { CertificationSectionCard } from "./_components/CertificationSectionCard";
import { EducationSectionCard } from "./_components/EducationSectionCard";
import { LanguageSectionCard } from "./_components/LanguageSectionCard";
import { WorkExperienceSectionCard } from "./_components/WorkExperienceSectionCard";
import { TestimonialSectionCard } from "./_components/TestimonialSectionCard";
import { MainAvatarSectionCard } from "./_components/MainAvatarSectionCard";
import { PassiveTraitSectionCard } from "./_components/PassiveTraitSectionCard";

export default function Portfolio() {
  return (
    <main className="min-h-[calc(100vh-4rem)] p-4 md:p-8 bg-zinc-950 text-zinc-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

        {/* TOP LEFT: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 lg:col-span-3"
        >
          <MainAvatarSectionCard />
        </motion.div>

        {/* TOP MIDDLE & RIGHT: Abilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <PassiveTraitSectionCard className="lg:col-span-1" />
          <SkillSectionCard className="lg:col-span-2" />
        </motion.div>

        {/* LEFT COLUMN: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 lg:col-span-3 flex flex-col gap-4"
        >
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-zinc-500 flex items-center gap-1"><Terminal className="w-3 h-3" /> Role</p>
                  <p className="text-zinc-200">Full Stack</p>
                </div>
                <div>
                  <p className="text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</p>
                  <p className="text-zinc-200">Singapore</p>
                </div>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> github.com/mc-dev
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> linkedin.com/in/mc-dev
                </a>
              </div>
            </CardContent>
          </Card>

          {/* <SkillSectionCard /> */}
          <CertificationSectionCard />
          <EducationSectionCard />
          <LanguageSectionCard />

        </motion.div>

        {/* MIDDLE COLUMN: Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 lg:col-span-5"
        >
          <WorkExperienceSectionCard />
        </motion.div>

        {/* RIGHT COLUMN: Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 lg:col-span-4"
        >
          <TestimonialSectionCard />
        </motion.div>

        {/* BOTTOM: Past Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-12"
        >
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Recent Artifacts (Projects)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group relative rounded-lg overflow-hidden border border-zinc-800 cursor-pointer">
                    <div className="aspect-video bg-zinc-800 relative">
                      <img src={`https://picsum.photos/seed/project${i}/400/225`} alt={`Project ${i}`} className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                        <PlayCircle className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    <div className="p-3 bg-zinc-950">
                      <p className="text-sm font-bold text-white truncate">Project Alpha {i}</p>
                      <p className="text-xs text-zinc-500 truncate">React • Node.js • WebGL</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </main>
  );
}
