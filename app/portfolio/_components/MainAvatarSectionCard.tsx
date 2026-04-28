import { Star } from 'lucide-react';
import { Badge } from '@/app/_components/badge';
import { Card, CardContent } from '@/app/_components/card';
import { MainAvatar } from './MainAvatar';

export const MainAvatarSectionCard = () => {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
        <MainAvatar />
        <div>
          <h2 className="text-foreground flex items-center justify-center gap-2 text-xl font-bold">
            Marcus Ng Wen Jian{' '}
            <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
          </h2>
          <p className="text-muted-secondary-foreground text-sm">
            Software Engineer
          </p>
        </div>
        <Badge
          variant="outline"
          className="border-primary text-primary w-full justify-center py-1"
        >
          <Star className="mr-2 h-3 w-3" /> Level 99 Full Stack Developer
        </Badge>
      </CardContent>
    </Card>
  );
};
