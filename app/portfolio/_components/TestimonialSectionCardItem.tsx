import { Avatar, AvatarFallback, AvatarImage } from "@/app/_components/avatar";
import { Testimonial } from "../_lib/types";

type TestimonialSectionCardItemProps = Testimonial;

export const TestimonialSectionCardItem = ({ referee, attribution, avatar, quote }: TestimonialSectionCardItemProps) => {
  return (
    <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800">
      <div className="flex items-center gap-3 mb-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={avatar} />
          {/* <AvatarFallback>{test.name[0]}</AvatarFallback> */}
        </Avatar>
        <div>
          <p className="text-sm font-bold text-foreground">{referee}</p>
          <p className="text-xs text-muted-secondary-foreground">{attribution}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground italic">"{quote}"</p>
    </div>
  );
};
