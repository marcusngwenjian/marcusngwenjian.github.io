import { ReactNode } from "react";
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTrigger } from "@/app/_components/dialog";
import { Badge, badgeVariant } from "@/app/_components/badge";
import { skills, tools } from "../_data/skillset";

interface SkillModalProps {
  children: ReactNode;
}

export const SkillModal = ({ children }: SkillModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="cursor-pointer border-b border-dashed border-primary pb-px">
          {children}
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader hideDivider>
          <div className="text-lg text-foreground font-semibold">Skills</div>
        </DialogHeader>
        <DialogBody className="space-y-3">
          <div className="flex flex-wrap gap-2 pt-2">
            {[...new Set([...skills, ...tools])].map(skill => (
              <Badge key={skill} variant={badgeVariant.secondary}>
                {skill}
              </Badge>
            ))}
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
