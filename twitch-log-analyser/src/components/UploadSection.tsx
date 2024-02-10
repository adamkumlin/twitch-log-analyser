import UploadedFile from "./UploadedFile";

interface UploadSectionProps {
  logFile: File | null;
  setLogFile: React.Dispatch<React.SetStateAction<File | null>>;
  setLogFileText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  logFile,
  setLogFile,
  setLogFileText,
  setIsLoading
}) => {
  function handleFileInput(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsLoading(true);
    setLogFile(e.target.files[0]);

    const reader = new FileReader();

    reader.onload = (ev) => {
      setLogFileText(ev.target.result);
    };
    reader.readAsText(e.target.files[0]);
  }

  return (
    <div className="UploadSection">
      <form className="flex flex-row justify-center p-12">
        <input
          className=""
          type="file"
          id="search"
          onInput={(e) => handleFileInput(e)}
        />
      </form>
      <UploadedFile logFile={logFile} />
    </div>
  );
};

export default UploadSection;
