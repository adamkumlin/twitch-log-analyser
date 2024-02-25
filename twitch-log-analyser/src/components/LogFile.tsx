import { useEffect } from "react";

interface LogFileProps {
  logFileText: string;
  logs: string[] | null;
  setLogs: React.Dispatch<React.SetStateAction<string[] | null>>;
}

const LogFile: React.FC<LogFileProps> = ({
  logFileText,
  logs,
  setLogs,
}) => {
  useEffect(() => {
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

    const splitLogs: string[] = logString
      .split("\n")
      .filter((text) => text !== "");
    // Split string by newline character, remove empty values

    setLogs(splitLogs);
  }, []);

  return (
    <div className="LogFile text-left">
      {logs ? logs.map((log, index) => <p key={index}>{log}</p>) : null}
    </div>
  );
};

export default LogFile;
