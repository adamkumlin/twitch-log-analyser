import UploadedFile from "./UploadedFile";

interface UploadSectionProps {
  logFile: File | null;
  setLogFile: React.Dispatch<React.SetStateAction<File | null>>;
  setLogFileText: React.Dispatch<React.SetStateAction<string>>;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  logFile,
  setLogFile,
  setLogFileText,
}) => {
  function handleFileInput(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setLogFile(e.target.files[0]);

    const reader = new FileReader();

    reader.onload = (ev) => {
      setLogFileText(ev.target.result);
    };
    reader.readAsText(e.target.files[0]);
  }

  return (
    <div className="UploadSection flex flex-row justify-evenly mt-48">
      <div className="bg-gradient-to-b from-fuchsia-700 to-indigo-500 border-2 border-white border-dashed rounded-xl h-80 w-80">
        <input
          className="opacity-0 w-full h-full"
          type="file"
          onInput={(e) => handleFileInput(e)}
        />
        <div className="relative bottom-52 pointer-events-none">
          <h2 className="font-bold text-3xl">Drag files here</h2>
          <h3 className="font-normal text-gray-300 font-mono">or</h3>
          <h2 className="font-bold text-3xl">Click to upload</h2>
        </div>
      </div>
      <li className="bg-white w-0.5 list-none" aria-hidden="true" role="presentation"></li>
      <UploadedFile logFile={logFile} />
    </div>
  );
};

export default UploadSection;
