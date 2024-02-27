import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";
import AnalysisTools from "./components/AnalysisTools";
import type { SearchQuery, LogSettings, LogFile as LogFileT } from "./types";

const App: React.FC = () => {
  const [logFile, setLogFile] = useState<LogFileT>({
    file: null,
    text: "",
  });
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    query: "",
    metric: "user",
  });
  const [logs, setLogs] = useState<string[] | null>(null);
  const [logSettings, setLogSettings] = useState<LogSettings>({
    showModActions: false,
    showTimestamps: true,
  });
  function filterLogs(
    logs: string[] | null,
    searchQuery: SearchQuery
  ): void {
    let filteredLogs: string[] = [];

    if (!searchQuery.query || !searchQuery.metric || !logs) {
      return;
    }

    if (searchQuery.metric === "user") {
      for (let log of logs) {
        // Split into timestamp, username and rest of message, get the username and half of a timestamp, split again and grab the username
        const userName: string = log
          .split(":")[2]
          .split(" ")
          .slice(-1)
          .toString();

        if (userName && userName.includes(searchQuery.query)) {
          filteredLogs.push(log);
        }
      }
    } else {
      for (let log of logs) {
        // Split into timestamp, username and rest of message, get the first three (the timestamp and the username), and join
        const logDetails = log.split(":").slice(0, 3).join();

        // If log includes query starting from the timestamp and username, i.e. the message plus one to account for the colon
        if (log.includes(searchQuery.query, logDetails.length + 1)) {
          filteredLogs.push(log);
        }
      }
    }
    setLogs(filteredLogs);
  }

  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl mb-16">
        {!logFile.text ? "Upload file" : "Analyse"}
      </h1>
      {!logFile.text ? (
        <UploadSection logFile={logFile} setLogFile={setLogFile} />
      ) : null}
      {logFile.text !== "" ? (
        <AnalysisTools
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterLogs={filterLogs}
          logs={logs}
          logSettings={logSettings}
          setLogSettings={setLogSettings}
        />
      ) : null}

      {logFile.text !== "" ? (
        <LogFile logFile={logFile} logs={logs} setLogs={setLogs} />
      ) : null}
    </div>
  );
};

export default App;
