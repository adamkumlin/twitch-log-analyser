import { useEffect } from "react";
import type { LogFile } from "../types";

interface LogFileProps {
  logFile: LogFile;
  logs: string[] | null;
  setLogs: React.Dispatch<React.SetStateAction<string[] | null>>;
}

const LogFile: React.FC<LogFileProps> = ({
  logFile,
  logs,
  setLogs,
}) => {
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

    const splitLogs: string[] = logString
      .split("\n")
      .filter((text) => text !== "");
    // Split string by newline character, remove empty values

    setLogs(splitLogs);
  }, []);

  console.log(logFile)

  return (
    <div className="LogFile text-left">
      {logs ? logs.map((log, index) => <p key={index}>{log}</p>) : null}
    </div>
  );
};

export default LogFile;
