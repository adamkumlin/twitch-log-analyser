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
  });
  const [logSettings, setLogSettings] = useState<LogSettings>({
    showModActions: false,
    showTimestamps: true,
  });
  function filterLogs(logs: Logs, searchQuery: SearchQuery): void {
    let results: string[] = [];

    if (!searchQuery.query || !searchQuery.metric || !logs.originalLogs) {
      return;
    }

    if (searchQuery.metric === "user") {
      for (let log of logs.originalLogs) {
        // Split into timestamp, username and rest of message, get the username and remove the colon (last character)
        const userName: string = log.split(" ")[1].slice(0, -1);
        if (userName && userName.includes(searchQuery.query)) {
          results.push(log);
        }
      }
    } else {
      for (let log of logs.originalLogs) {
        // Split into timestamp, username and rest of message, get the first three (the timestamp and the username), and join
        const logDetails = log.split(":").slice(0, 3).join();

        // If log includes query starting from the timestamp and username, i.e. the message plus one to account for the colon
        if (log.includes(searchQuery.query, logDetails.length + 1)) {
          results.push(log);
        }
      }
    }
    setLogs((current) => ({
      ...current,
      filteredLogs: results,
    }));
  }

  function toggleShowTimestamps(logs: Logs, showTimestamps: boolean): void {
    if (!showTimestamps) {
      let logsWithoutTimestamps: string[] = [];

      if (logs.filteredLogs.length === 0) {
        for (let log of logs.originalLogs) {
          const logWithoutTimestamp: string = log.slice(0, 12);
          logsWithoutTimestamps.push(logWithoutTimestamp);
        }
      } else {
        for (let log of logs.filteredLogs) {
          const logWithoutTimestamp: string = log.slice(0, 12);
          logsWithoutTimestamps.push(logWithoutTimestamp);
        }
      }
      setLogs((current) => ({
        ...current,
        filteredLogs: logsWithoutTimestamps,
      }));
    }
  }
  console.log(logs);
  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl mb-16">{!logFile.text ? "Upload file" : "Analyse"}</h1>
      {!logFile.text ? <UploadSection logFile={logFile} setLogFile={setLogFile} /> : null}
      {logFile.text !== "" ? (
        <AnalysisTools
          setLogs={setLogs}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterLogs={filterLogs}
          logs={logs}
          logSettings={logSettings}
          setLogSettings={setLogSettings}
        />
      ) : null}

      {logFile.text !== "" ? (
        <LogFile
          logSettings={logSettings}
          logFile={logFile}
          logs={logs}
          setLogs={setLogs}
          toggleShowTimestamps={toggleShowTimestamps}
        />
      ) : null}
    </div>
  );
};

export default App;
