import { SectionCardWrapper } from "./SectionCardWrapper";
import { IntelExternalLinkButton } from "./IntelExternalLinkIconButton";

export const IntelSectionCard = () => {
  return (
    <SectionCardWrapper title="Intel">
      {/* <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-zinc-500 flex items-center gap-1"><Terminal className="w-3 h-3" /> Role</p>
          <p className="text-zinc-200">Full Stack</p>
        </div>
        <div>
          <p className="text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</p>
          <p className="text-zinc-200">Singapore</p>
        </div>
      </div> */}
      <div className="space-y-2 space-x-2">
        <IntelExternalLinkButton href="https://github.com/marcusngwenjian" alt="GitHub" iconSrc="/icons/external/icons8-github.svg" />
        <IntelExternalLinkButton href="https://www.linkedin.com/in/marcusngwenjian/" alt="LinkedIn" iconSrc="/icons/external/icons8-linkedin.svg" />
      </div>
    </SectionCardWrapper>
  );
};
