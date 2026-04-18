"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/avatar";
import { Badge } from "@/app/_components/badge";
import { Progress } from "@/app/_components/progress";
import { Separator } from "@/app/_components/separator";
import {
  MapPin, Mail, ExternalLink, Terminal,
  Code2, Database, Layout, Star, Award, Briefcase,
  GraduationCap, PlayCircle
} from "lucide-react";

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
          <Card className="bg-zinc-900 border-zinc-800 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Avatar className="w-24 h-24 border-2 border-primary">
                <AvatarImage src="https://picsum.photos/seed/anime/200/200" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                  Main Character <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </h2>
                <p className="text-sm text-zinc-400">mc.protagonist@anime.dev</p>
              </div>
              <Badge variant="outline" className="border-primary text-primary w-full justify-center py-1">
                <Star className="w-3 h-3 mr-2" /> Level 99 Full Stack Dev
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* TOP MIDDLE & RIGHT: Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#27272a" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-primary)" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="56.5" className="drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
                </svg>
                <div className="absolute text-2xl font-bold text-white">5.0</div>
              </div>
              <p className="font-semibold text-white">Years EXP</p>
              <p className="text-xs text-zinc-500 text-center mt-1">Grinding since 2021</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-primary">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">42</h3>
              <p className="font-semibold text-white">Projects Completed</p>
              <p className="text-xs text-zinc-500 text-center mt-1">Quests finished</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-primary">
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">10k+</h3>
              <p className="font-semibold text-white">Commits</p>
              <p className="text-xs text-zinc-500 text-center mt-1">Power level over 9000</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* LEFT COLUMN: Info & Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 lg:col-span-3 flex flex-col gap-4"
        >
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-zinc-500 flex items-center gap-1"><Terminal className="w-3 h-3" /> Role</p>
                  <p className="text-zinc-200">Full Stack Dev</p>
                </div>
                <div>
                  <p className="text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</p>
                  <p className="text-zinc-200">Tokyo, Japan</p>
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

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Skill Tree</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300 flex items-center gap-1"><Layout className="w-3 h-3" /> Frontend</span>
                    <span className="text-primary">Lv. 90</span>
                  </div>
                  <Progress value={90} className="h-1 bg-zinc-800" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-300 flex items-center gap-1"><Database className="w-3 h-3" /> Backend</span>
                    <span className="text-primary">Lv. 85</span>
                  </div>
                  <Progress value={85} className="h-1 bg-zinc-800" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Education & Certs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1"><GraduationCap className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm font-medium text-white">B.S. Computer Science</p>
                  <p className="text-xs text-zinc-500">Anime Tech University • 2020</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1"><Award className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-sm font-medium text-white">AWS Certified Solutions Architect</p>
                  <p className="text-xs text-zinc-500">Amazon Web Services • 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* MIDDLE COLUMN: Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 lg:col-span-5"
        >
          <Card className="bg-zinc-900 border-zinc-800 h-full">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" /> Quest Log (Experience)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { role: "Senior Frontend Engineer", company: "CyberDyne Systems", date: "2023 - Present", desc: "Leading the frontend guild. Architecting the new Next.js micro-frontends." },
                  { role: "Full Stack Developer", company: "Nerv Corp", date: "2021 - 2023", desc: "Built the Evangelion monitoring dashboard using React and WebSockets." },
                  { role: "Junior Developer", company: "Capsule Corp", date: "2020 - 2021", desc: "Maintained legacy Dragon Radar systems. Migrated from jQuery to React." }
                ].map((job, i) => (
                  <div key={i} className="relative pl-6 border-l border-zinc-800 last:border-0 pb-6 last:pb-0">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,0,0.5)]" />
                    <h4 className="text-base font-bold text-white">{job.role}</h4>
                    <p className="text-sm text-primary mb-2">{job.company} <span className="text-zinc-500 ml-2">{job.date}</span></p>
                    <p className="text-sm text-zinc-400">{job.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* RIGHT COLUMN: Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 lg:col-span-4"
        >
          <Card className="bg-zinc-900 border-zinc-800 h-full">
            <CardHeader>
              <CardTitle className="text-lg text-white">Guild Members Say</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Asuka L.", role: "Lead Designer", text: "Baka! But his code is actually pretty good. Always delivers on time." },
                { name: "Goku Son", role: "Product Manager", text: "His power level is insane! He built that feature faster than instant transmission." },
                { name: "L Lawliet", role: "Security Engineer", text: "I've analyzed his code. The probability of bugs is less than 1%." }
              ].map((test, i) => (
                <div key={i} className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={`https://picsum.photos/seed/${test.name}/100/100`} />
                      <AvatarFallback>{test.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-white">{test.name}</p>
                      <p className="text-xs text-zinc-500">{test.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 italic">"{test.text}"</p>
                </div>
              ))}
            </CardContent>
          </Card>
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
