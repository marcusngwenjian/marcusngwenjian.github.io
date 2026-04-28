'use client';

import {
  Code2,
  ExternalLink,
  MapPin,
  PlayCircle,
  Terminal,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/card';
import { Separator } from '@/app/_components/separator';
import { CertificationSectionCard } from './_components/CertificationSectionCard';
import { EducationSectionCard } from './_components/EducationSectionCard';
import { IntelSectionCard } from './_components/IntelSectionCard';
import { LanguageSectionCard } from './_components/LanguageSectionCard';
import { MainAvatarSectionCard } from './_components/MainAvatarSectionCard';
import { PassiveTraitSectionCard } from './_components/PassiveTraitSectionCard';
import { SkillSectionCard } from './_components/SkillSectionCard';
import { TestimonialSectionCard } from './_components/TestimonialSectionCard';
import { WorkExperienceSectionCard } from './_components/WorkExperienceSectionCard';

export default function Portfolio() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-zinc-950 p-4 text-zinc-300 md:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
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
          className="grid grid-cols-1 gap-4 md:col-span-8 lg:col-span-9 lg:grid-cols-3"
        >
          <PassiveTraitSectionCard className="lg:col-span-1" />
          <SkillSectionCard className="lg:col-span-2" />
        </motion.div>

        {/* LEFT COLUMN: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 md:col-span-4 lg:col-span-3"
        >
          {/* <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg text-white">Intel</CardTitle>
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
          </Card> */}

          <IntelSectionCard />

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
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-lg text-white">
                Recent Artifacts (Projects)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="group relative cursor-pointer overflow-hidden rounded-lg border border-zinc-800"
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <img
                        src={`https://picsum.photos/seed/project${i}/400/225`}
                        alt={`Project ${i}`}
                        className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <PlayCircle className="text-primary h-10 w-10" />
                      </div>
                    </div>
                    <div className="bg-zinc-950 p-3">
                      <p className="truncate text-sm font-bold text-white">
                        Project Alpha {i}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        React • Node.js • WebGL
                      </p>
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
