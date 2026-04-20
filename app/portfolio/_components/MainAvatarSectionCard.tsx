import { Star } from "lucide-react";
import { Card, CardContent } from "@/app/_components/card";
import { Badge } from "@/app/_components/badge";
import { MainAvatar } from "./MainAvatar";


export const MainAvatarSectionCard = () => {
  return (
    <Card className="border-zinc-800 h-full">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <MainAvatar />
        <div>
          <h2 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
            Marcus Ng Wen Jian <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </h2>
          <p className="text-sm text-muted-secondary-foreground">Software Engineer</p>
        </div>
        <Badge variant="outline" className="border-primary text-primary w-full justify-center py-1">
          <Star className="w-3 h-3 mr-2" /> Level 99 Full Stack Developer
        </Badge>
      </CardContent>
    </Card>
  );
};
