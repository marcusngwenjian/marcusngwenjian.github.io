import { BrainCircuit, Coffee, Sparkles, Users } from "lucide-react";
import { PassiveTrait } from "../_lib/types";

export const passiveAbilities: readonly PassiveTrait[] = [
  {
    icon: Users,
    name: "Team Coordination",
    description: "Increased efficiency in collaborative raids",
    effect: "+15 Synergy",
  },
  {
    icon: BrainCircuit,
    name: 'Deep Work Aura',
    description: 'Resistance to distraction debuffs',
    effect: '+20 Focus',
  },
  {
    icon: Sparkles,
    name: 'Clean Code Seal',
    description: 'Passive reduction in technical debt',
    effect: '+20 Stability',
  },
  {
    icon: Coffee,
    name: 'Tea Infusion',
    description: 'Boosts compilation and sprint speeds',
    effect: '+10 Haste',
  }
];
