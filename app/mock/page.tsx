
import ResumeDownloadButtonDynamic from "../_components/resume/ResumeDownloadButtonDynamic";

export default function Profile() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="bg-muted text-muted-foreground">
            Sample Muted Text
          </div>
          <ResumeDownloadButtonDynamic />
        </div>
      </main>
    </div>
  );
}
