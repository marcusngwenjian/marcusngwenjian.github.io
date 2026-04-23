import Image from "next/image";
import { ExternalLinkButton } from "@/app/_components/button/ExternalLinkButton";
import { buttonSize, buttonVariant } from "@/app/_components/button";

type IntelExternalLinkButtonProps = {
  href: string;
  alt: string;
  iconSrc: string;
};

export const IntelExternalLinkButton = ({ href, alt, iconSrc }: IntelExternalLinkButtonProps) => {
  return (
    <ExternalLinkButton href={href} variant={buttonVariant.outline} size={buttonSize.icon}>
      <Image src={iconSrc} alt={alt} width={24} height={24} />
    </ExternalLinkButton>
  );
};
