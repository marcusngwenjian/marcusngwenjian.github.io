'use client';

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Button } from '@/app/_components/button';
import type {
  Certification,
  Contact,
  EducationQualification,
  WorkExperience,
} from './lib/types';
import { ResumePdf } from './ResumePdf';

interface ResumeDownloadButtonProps {
  workExperiences: readonly WorkExperience[];
  certifications: readonly Certification[];
  qualifications: readonly EducationQualification[];
  contacts: readonly Contact[];
  skillset: readonly string[];
}

export const ResumeDownloadButton = ({
  workExperiences,
  certifications,
  qualifications,
  contacts,
  skillset,
}: ResumeDownloadButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      // Generate the PDF blob only when the user clicks
      const blob = await pdf(
        <ResumePdf
          workExperiences={workExperiences}
          certifications={certifications}
          qualifications={qualifications}
          contacts={contacts}
          skillset={skillset}
        />,
      ).toBlob();

      // Create a temporary URL for the blob
      const url = URL.createObjectURL(blob);

      // Create a hidden anchor element and trigger click
      const link = document.createElement('a');
      link.href = url;
      link.download = 'MarcusNgWenJian-Resume.pdf';
      document.body.appendChild(link);
      link.click();

      // 4. Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('PDF generation failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={loading}
      // className="rounded bg-blue-600 px-4 py-2 text-white disabled:bg-gray-400"
    >
      {loading ? 'Generating...' : 'Download Resume'}
    </Button>
  );
};
