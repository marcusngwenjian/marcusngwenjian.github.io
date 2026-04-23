"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Avatar } from "@/app/_components/avatar";

export const MainAvatar = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFullyInView = useInView(videoRef, { amount: 1 });
  const isAnyPartOfVideoInView = useInView(videoRef, { amount: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isFullyInView) {
      // PLAY: Video is 100% in sight
      video.play();
    } else if (isAnyPartOfVideoInView) {
      // PAUSE: Video is partially visible (not 100% in, but not 100% out)
      video.pause();
    } else {
      // RESET: Video is 100% out of sight
      video.pause();
      video.currentTime = 0;
    }
  }, [isFullyInView, isAnyPartOfVideoInView]);

  return (
    <Avatar className="w-24 h-24 border-2 border-primary">
      <motion.video
        ref={videoRef}
        src="/videos/avatar-adjust-spectacles.mp4"
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover outline-none border-none"
      />
    </Avatar>
  );
};
