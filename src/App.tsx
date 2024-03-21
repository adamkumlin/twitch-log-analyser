import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";
import AnalysisTools from "./components/AnalysisTools";
import type { SearchQuery, LogSettings, LogFile as LogFileT, Logs } from "./types";

const App: React.FC = () => {
  const [logFile, setLogFile] = useState<LogFileT>({
    file: null,
    text: "",
  });
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    query: "",
    metric: "user",
  });
  const [logs, setLogs] = useState<Logs>({
    originalLogs: [],
    filteredLogs: [],
    alteredFilteredLogs: [],
  });
  const [logSettings, setLogSettings] = useState<LogSettings>({
    showModActions: false,
    showTimestamps: true,
  });
  
  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl mb-16">{!logFile.text ? "Upload file" : "Analyse"}</h1>
      {!logFile.text ? <UploadSection logFile={logFile} setLogFile={setLogFile} /> : null}
      {logFile.text !== "" ? (
        <AnalysisTools
          setLogs={setLogs}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          logs={logs}
          logSettings={logSettings}
          setLogSettings={setLogSettings}
          logFile={logFile}
        />
      ) : null}

      {logFile.text !== "" ? (
        <LogFile
          logs={logs}
        />
      ) : null}
    </div>
  );
};

export default App;
