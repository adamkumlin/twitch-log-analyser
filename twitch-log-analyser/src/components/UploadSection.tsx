import type { LogFile } from "../types";
import UploadedFile from "./UploadedFile";

interface UploadSectionProps {
  logFile: LogFile;
  setLogFile: React.Dispatch<React.SetStateAction<LogFile>>;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  logFile,
  setLogFile,
}) => {
  function readFileText() {
    const reader = new FileReader();

    reader.onload = (ev) => {
      setLogFile((current) => ({
        ...current,
        text: ev.target.result,
      }));
    };
    reader.readAsText(logFile.file as Blob);
  }

  return (
    <div className="UploadSection flex flex-row justify-evenly mt-48">
      <div className="bg-gradient-to-b from-fuchsia-700 to-indigo-500 border-2 border-white border-dashed rounded-xl h-80 w-80">
        <input
          className="opacity-0 w-full h-full"
          type="file"
          onInput={(e) =>
            setLogFile((current) => ({ ...current, file: e.target.files[0] }))
          }
        />
        <div className="relative bottom-52 pointer-events-none">
          <h2 className="font-bold text-3xl">Drag files here</h2>
          <h3 className="font-normal text-gray-300 font-mono">or</h3>
          <h2 className="font-bold text-3xl">Click to upload</h2>
        </div>
        <input
          className="bg-slate-300 text-black rounded-sm p-2"
          type="button"
          value="Upload"
          onClick={readFileText}
        />
      </div>
      <li
        className="bg-white w-0.5 list-none"
        aria-hidden="true"
        role="presentation"></li>
      <UploadedFile
        logFile={logFile.file}
        image="/file-background.png"
        style="relative -top-64 text-black"
      />
    </div>
  );
};

export default UploadSection;
