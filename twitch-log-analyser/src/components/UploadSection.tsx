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
    <div className="UploadSection flex flex-row justify-evenly mt-8">
      <div>
        <input
          className="bg-gradient-to-b from-fuchsia-700 to-indigo-500"
          type="file"
          onInput={(e) => handleFileInput(e)}
        />
          <h2>Drag files here</h2>
          <h3>or</h3>
          <h2>Click to upload</h2>

      </div>
      <UploadedFile logFile={logFile} />
    </div>
  );
};

export default UploadSection;
