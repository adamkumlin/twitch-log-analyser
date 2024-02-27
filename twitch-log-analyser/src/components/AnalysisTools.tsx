import type { SearchQuery, LogSettings } from "../types";
import ActionsLister from "./ActionsLister";
import SearchFilter from "./SearchFilter";

interface AnalysisToolsProps {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  filterLogs: (logs: string[], searchQuery: SearchQuery) => void;
  logs: string[] | null;
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
}) => {
  return (
    <div className="AnalysisTools">
      <form>
        <SearchFilter
          setSearchQuery={setSearchQuery}
          filterLogs={filterLogs}
          searchQuery={searchQuery}
          logs={logs}
        />
        <ActionsLister
          logs={logs}
          logSettings={logSettings}
          setLogSettings={setLogSettings}
        />
      </form>
    </div>
  );
};

export default AnalysisTools;
