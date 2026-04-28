import { Avatar, AvatarFallback, AvatarImage } from '@/app/_components/avatar';
import type { Testimonial } from '../_lib/types';

type TestimonialSectionCardItemProps = Testimonial;

export const TestimonialSectionCardItem = ({
  referee,
  attribution,
  avatar,
  quote,
}: TestimonialSectionCardItemProps) => {
  return (
    <div className="border-border rounded-lg border bg-zinc-950 p-4">
      <div className="mb-2 flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatar} />
          {/* <AvatarFallback>{test.name[0]}</AvatarFallback> */}
        </Avatar>
        <div>
          <p className="text-foreground text-sm font-bold">{referee}</p>
          <p className="text-muted-secondary-foreground text-xs">
            {attribution}
          </p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm italic">
        &quot;{quote}&quot;
      </p>
    </div>
  );
};
