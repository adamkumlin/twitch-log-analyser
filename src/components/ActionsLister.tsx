import { useEffect } from "react";
import type { LogFile, LogSettings, Logs } from "../types";

interface ActionsListerProps {
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
  logs: Logs;
  logFile: LogFile;
}

const ActionsLister: React.FC<ActionsListerProps> = ({ logSettings, setLogSettings, setLogs, logs, logFile }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "showModActions") {
      if (!logSettings.showModActions) {
        setLogSettings((current) => ({
          ...current,
          showModActions: true,
        }));
      } else {
        setLogSettings((current) => ({
          ...current,
          showModActions: false,
        }));
        return;
      }
    } else {
      if (logSettings.showTimestamps) {
        setLogSettings((current) => ({
          ...current,
          showTimestamps: false,
        }));
      } else {
        setLogSettings((current) => ({
          ...current,
          showTimestamps: true,
        }));
      }
    }
  }

    function toggleShowTimestamps(logs: Logs, showTimestamps: boolean): void {
      let logsWithoutTimestamps: string[] = [];

      if (!showTimestamps) {

        if (logs.filteredLogs.length === 0) {
          for (let log of logs.originalLogs) {
            const sliced = log.slice(11);
            logsWithoutTimestamps.push(sliced);
          }
        } else {
          for (let log of logs.filteredLogs) {
            const sliced = log.slice(11);
            logsWithoutTimestamps.push(sliced);
          }
        }
        setLogs((current) => ({
          ...current,
          filteredLogs: logsWithoutTimestamps,
        }));
      } else if (logs.filteredLogs.length !== logs.originalLogs.length && logs.filteredLogs.length > 0){
        setLogs((current) => ({
          ...current,
          filteredLogs: logs.filteredLogs,
        }));
      } else {
        setLogs((current) => ({
          ...current,
          filteredLogs: logs.originalLogs,
        }));
      }
    }

    console.log(logs)

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
    <>
      <label htmlFor="showModActions">Show moderator actions</label>
      <input
        id="showModActions"
        type="checkbox"
        checked={logSettings.showModActions}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="showTimestamps">Show timestamps</label>
      <input
        type="checkbox"
        id="showTimestamps"
        checked={logSettings.showTimestamps}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default ActionsLister;
