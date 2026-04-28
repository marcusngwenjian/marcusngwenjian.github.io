import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@/app/_components/button';
import { ResumePdf } from './ResumePdf';

export default function ResumeDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ResumePdf />}
      fileName="MarcusNgWenJian-Resume.pdf"
    >
      {({ loading }) => (
        <Button
          disabled={loading}
          className="font-bold transition-transform hover:scale-105"
        >
          {'Download PDF'}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
