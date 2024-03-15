import { useEffect } from "react";
import type { SearchQuery, LogSettings, Logs, LogFile } from "../types";
import ActionsLister from "./ActionsLister";
import SearchFilter from "./SearchFilter";

interface AnalysisToolsProps {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
  logFile: LogFile;
}

const AnalysisTools: React.FC<AnalysisToolsProps> = ({
  searchQuery,
  setSearchQuery,
  logs,
  logSettings,
  setLogSettings,
  setLogs,
  logFile,
}) => {

  return (
    <div className="AnalysisTools">
      <form>
        <SearchFilter
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          logs={logs}
          setLogs={setLogs}
        />
        <ActionsLister logSettings={logSettings} setLogSettings={setLogSettings} setLogs={setLogs} logs={logs} logFile={logFile} />
      </form>
    </div>
  );
};

export default AnalysisTools;
