import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";

const App: React.FC = () => {
  const [logFile, setLogFile] = useState<File | null>(null);
  const [logFileText, setLogFileText] = useState<string>("");

  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl">Upload file</h1>
      <UploadSection
        logFile={logFile}
        setLogFile={setLogFile}
        setLogFileText={setLogFileText}
      />

      {logFileText !== "" ? <LogFile logFileText={logFileText} /> : null}
    </div>
  );
};

export default App;
