import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";
import SearchTools from "./components/SearchTools";

const App: React.FC = () => {
  const [logFile, setLogFile] = useState<File | null>(null);
  const [logFileText, setLogFileText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl">{!logFileText ? "Upload file" : "Search"}</h1>
      {!logFileText ? <UploadSection
        logFile={logFile}
        setLogFile={setLogFile}
        setLogFileText={setLogFileText}
      /> : <SearchHeading />}

      {!logFileText ? <SearchTools searchQuery={searchQuery} setSearchQuery={setSearchQuery}/> : null}

      {logFileText !== "" ? <LogFile logFileText={logFileText} /> : null}
    </div>
  );
};

export default App;
