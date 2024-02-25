import { useState } from "react";
import LogFile from "./components/LogFile";
import UploadSection from "./components/UploadSection";
import AnalysisTools from "./components/AnalysisTools";
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
  const [logs, setLogs] = useState<string[] | null>(null);

  function filterLogs(
    logs: string[] | null,
    query: string,
    metric: SearchMetric
  ): void {
    let filteredLogs: string[] = [];

    if (!query || !metric || !logs) {
      return;
    }

    if (metric === "user") {
      for (let log of logs) {
        // Split into timestamp, username and rest of message, get the username and half of a timestamp, split again and grab the username
        const userName: string = log
          .split(":")[2]
          .split(" ")
          .slice(-1)
          .toString();

        if (userName && userName.includes(query)) {
          filteredLogs.push(log);
        }
      }
    } else {
      for (let log of logs) {
        // Split into timestamp, username and rest of message, get the first three (the timestamp and the username), and join
        const logDetails = log.split(":").slice(0, 3).join();

        // If log includes query starting from the timestamp and username, i.e. the message plus one to account for the colon
        if (log.includes(query, logDetails.length + 1)) {
          filteredLogs.push(log);
        }
      }
    }
    setLogs(filteredLogs);
  }

  return (
    <div className="App text-center text-white p-4 overflow-x-hidden min-h-full">
      <h1 className="font-mono text-5xl mb-16">
        {!logFileText ? "Upload file" : "Analyse"}
      </h1>
      {!logFileText ? (
        <UploadSection
          logFile={logFile}
          setLogFile={setLogFile}
          setLogFileText={setLogFileText}
        />
      ) : null}
      {logFileText !== "" ? (
        <AnalysisTools
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterLogs={filterLogs}
          logs={logs}
        />
      ) : null}

      {logFileText !== "" ? (
        <LogFile logFileText={logFileText} logs={logs} setLogs={setLogs} />
      ) : null}
    </div>
  );
};

export default App;
