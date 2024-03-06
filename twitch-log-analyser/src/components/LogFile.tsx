import { useEffect } from "react";
import type { LogFile, LogSettings, Logs } from "../types";

interface LogFileProps {
  logFile: LogFile;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
  toggleShowTimestamps: (logs: Logs, showTimestamps: boolean) => void;
  logSettings: LogSettings;
}

const LogFile: React.FC<LogFileProps> = ({ logFile, logs, setLogs, toggleShowTimestamps, logSettings }) => {
  useEffect(() => {
    let logString: string = "";

    let logFileTextLength = logFile.text.length;

    for (let i = 0; i < logFileTextLength; i++) {
      if (
        logFile.text[i] === "[" &&
        !isNaN(parseInt(logFile.text[i + 1])) &&
        !isNaN(parseInt(logFile.text[i + 2])) &&
        logFile.text[i + 3] === ":" &&
        !isNaN(parseInt(logFile.text[i + 4])) &&
        !isNaN(parseInt(logFile.text[i + 5])) &&
        logFile.text[i + 6] === ":" &&
        !isNaN(parseInt(logFile.text[i + 7])) &&
        !isNaN(parseInt(logFile.text[i + 8])) &&
        logFile.text[i + 9] === "]"
      ) {
        logString = logString + "\n" + logFile.text[i];
      } else {
        logString = logString + logFile.text[i];
      }
    }

    const splitLogs: string[] = logString.split("\n").filter((text) => text !== "");
    // Split string by newline character, remove empty values

    setLogs((current) => ({
      ...current,
      originalLogs: splitLogs,
    }));

    toggleShowTimestamps(logs, logSettings.showTimestamps);
  }, [logSettings]);

  return (
    <div className="LogFile text-left">
      {logs.originalLogs.length > 0 && logs.filteredLogs.length === 0
        ? logs.originalLogs.map((log, index) => <p key={index}>{log}</p>)
        : null}
      {logs.filteredLogs.length > 0 ? logs.filteredLogs.map((log, index) => <p key={index}>{log}</p>) : null}
    </div>
  );
};

export default LogFile;
