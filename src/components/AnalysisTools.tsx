import { SearchQuery, LogSettings, Logs, LogFile } from "../lib/types";
import ActionsLister from "./ActionsLister";
import SearchFilter from "./SearchFilter";

interface Props {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
  logFile: LogFile;
}

export default function AnalysisTools({
  searchQuery,
  setSearchQuery,
  logs,
  logSettings,
  setLogSettings,
  setLogs,
  logFile,
}: Props) {
  return (
    <form>
      <SearchFilter
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        logs={logs}
        setLogs={setLogs}
      />
      <ActionsLister
        logSettings={logSettings}
        setLogSettings={setLogSettings}
        setLogs={setLogs}
        logs={logs}
        logFile={logFile}
      />
    </form>
  );
}