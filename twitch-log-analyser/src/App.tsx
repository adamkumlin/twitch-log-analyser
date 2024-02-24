import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";
import SearchTools from "./components/SearchTools";
import SearchHeading from "./components/SearchHeading";
import UploadedFile from "./components/UploadedFile";
import type { SearchMetric } from "./types";

const App: React.FC = () => {
  const [logFile, setLogFile] = useState<File | null>(null);
  const [logFileText, setLogFileText] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<{
    query: string;
    metric: SearchMetric;
  }>({
    query: "",
    metric: "user",
  });

  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl mb-8">
        {!logFileText ? "Upload file" : "Analyse"}
      </h1>
      {!logFileText ? (
        <UploadSection
          logFile={logFile}
          setLogFile={setLogFile}
          setLogFileText={setLogFileText}
        />
      ) : null}
      {logFileText !== "" ? <SearchHeading logFile={logFile} /> : null}
      {logFileText !== "" ? (
        <SearchTools
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      ) : null}

      {logFileText !== "" ? <LogFile logFileText={logFileText} /> : null}
    </div>
  );
};

export default App;
