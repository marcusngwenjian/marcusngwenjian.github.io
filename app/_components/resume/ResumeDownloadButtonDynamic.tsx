'use client';

import dynamic from 'next/dynamic';

const ResumeDownloadButtonDynamic = dynamic(
  () => import('@/app/_components/resume/ResumeDownloadButton'),
  { ssr: false },
);

export default ResumeDownloadButtonDynamic;
