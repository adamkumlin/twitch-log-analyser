import { useEffect, useState } from "react";
import { Logs } from "../lib/types";

interface Props {
  logs: Logs;
}

export default function LogFile({ logs }: Props) {
  const [logsToDisplay, setLogsToDisplay] = useState<string[] | null>(null);

  useEffect(() => {
    if (logs.alteredFilteredLogs.length > 0) {
      setLogsToDisplay(logs.alteredFilteredLogs);
    } else if (logs.filteredLogs.length > 0) {
      setLogsToDisplay(logs.filteredLogs);
    } else {
      setLogsToDisplay(logs.originalLogs);
    }
  }, [logs]);

  return (
    <div className="LogFile text-left">
      {logsToDisplay
        ? logsToDisplay.map((log, index) => <p key={index}>{log}</p>)
        : null}
    </div>
  );
}
