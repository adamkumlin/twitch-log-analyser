import { useEffect } from "react";
import { SearchMetric } from "../types";

interface LogFileProps {
  logFileText: string;
  searchQuery: {
    query: string;
    metric: SearchMetric;
  };
}

const LogFile: React.FC<LogFileProps> = ({ logFileText, searchQuery }) => {
  let logString: string = "";

  let logFileTextLength = logFileText.length;

  for (let i = 0; i < logFileTextLength; i++) {
    if (
      logFileText[i] === "[" &&
      !isNaN(parseInt(logFileText[i + 1])) &&
      !isNaN(parseInt(logFileText[i + 2])) &&
      logFileText[i + 3] === ":" &&
      !isNaN(parseInt(logFileText[i + 4])) &&
      !isNaN(parseInt(logFileText[i + 5])) &&
      logFileText[i + 6] === ":" &&
      !isNaN(parseInt(logFileText[i + 7])) &&
      !isNaN(parseInt(logFileText[i + 8])) &&
      logFileText[i + 9] === "]"
    ) {
      logString = logString + "\n" + logFileText[i];
    } else {
      logString = logString + logFileText[i];
    }
  }

  const logs: string[] = logString.split("\n").filter(text => text !== "");
  // Split string by newline character, remove empty values
  
  let filteredLogs: string[] = [];

  function filterLogs(logs: string[], query: string, metric: SearchMetric): void {

    if (!query || !metric) {
      return;
    }

    if (metric === "message") {
      for (let log of logs) {
        // Split into just timestamp and username, get the length
        const logDetailsLength: number = log.split(":", 1).toString().length;

        if (log.includes(query, logDetailsLength)) {
          filteredLogs.push(log);
        }
      }
    } else {
      for (let log of logs) {
        // Split into details and rest of log, remove the details
        const logWithoutDetails = log.split(":").shift();

        if (logWithoutDetails && logWithoutDetails.includes(query)) {
          filteredLogs.push(log);
        }
      }
    }
  }

  useEffect(() => {
    filterLogs(logs, searchQuery.query, searchQuery.metric);
  }, [logs, filteredLogs, filterLogs, searchQuery])

  if (filteredLogs.length > 0) {
    return (
      <div className="LogFile text-left">
        {filteredLogs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div className="LogFile text-left">
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
      </div>
    );
  }
};

export default LogFile;
