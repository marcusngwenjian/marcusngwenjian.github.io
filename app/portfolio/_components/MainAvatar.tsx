'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Avatar } from '@/app/_components/avatar';
import { log } from '@/app/_utilities/log';

export const MainAvatar = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const isFullyInView = useInView(videoRef, { amount: 1 });
  const isAnyPartOfVideoInView = useInView(videoRef, { amount: 0 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = async () => {
      try {
        // Store the promise so we can track its status
        playPromiseRef.current = video.play();
        await playPromiseRef.current;
      } catch (error) {
        // Handle cases where autoplay is blocked or interrupted
        log.error('Playback interrupted or blocked:', error);
      } finally {
        playPromiseRef.current = null;
      }
    };

    const handlePause = async (reset = false) => {
      // If there's an active play promise, wait for it to finish before pausing
      if (playPromiseRef.current) {
        await playPromiseRef.current;
      }
      video.pause();
      if (reset) video.currentTime = 0;
    };

    if (isFullyInView) {
      handlePlay();
    } else if (isAnyPartOfVideoInView) {
      handlePause(false);
    } else {
      handlePause(true);
    }
  }, [isFullyInView, isAnyPartOfVideoInView]);

  return (
    <Avatar className="border-primary h-24 w-24 border-2">
      <motion.video
        ref={videoRef}
        src="/videos/avatar-adjust-spectacles.mp4"
        muted
        playsInline
        className="absolute inset-0 h-full w-full border-none object-cover outline-none"
      />
    </Avatar>
  );
};
