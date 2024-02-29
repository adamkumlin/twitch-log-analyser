import type { SearchQuery, LogSettings, Logs } from "../types";
import ActionsLister from "./ActionsLister";
import SearchFilter from "./SearchFilter";

interface AnalysisToolsProps {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  filterLogs: (logs: Logs, searchQuery: SearchQuery) => void;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
}

const AnalysisTools: React.FC<AnalysisToolsProps> = ({
  searchQuery,
  setSearchQuery,
  filterLogs,
  logs,
  logSettings,
  setLogSettings,
  setLogs,
}) => {
  return (
    <div className="AnalysisTools">
      <form>
        <SearchFilter
          setSearchQuery={setSearchQuery}
          filterLogs={filterLogs}
          searchQuery={searchQuery}
          logs={logs}
          setLogs={setLogs}
        />
        <ActionsLister logSettings={logSettings} setLogSettings={setLogSettings} />
      </form>
    </div>
  );
};

export default AnalysisTools;
