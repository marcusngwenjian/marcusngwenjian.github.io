import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/app/_components/button";
import { ResumePdf } from "./ResumePdf";

export default function ResumeButton() {
  return (
    <PDFDownloadLink
      document={<ResumePdf />}
      fileName="zzz-Resume-MarcusNgwenjian.pdf"
    >
      {({ loading }) => (
        <Button disabled={loading} className="font-mono bg-black text-white border border-[#444] rounded-sm hover:bg-zinc-900">
          {loading ? "Generating..." : "Download PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
