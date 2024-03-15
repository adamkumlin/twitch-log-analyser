import type { LogFile, Logs } from "../types";

interface LogFileProps {
  logs: Logs;
}

const LogFile: React.FC<LogFileProps> = ({ logs }) => {

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
