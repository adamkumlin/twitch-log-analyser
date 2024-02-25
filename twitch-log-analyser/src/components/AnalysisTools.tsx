import { SearchMetric } from "../types";
import SearchFilter from "./SearchFilter";

interface AnalysisToolsProps {
  searchQuery: {
    query: string;
    metric: SearchMetric;
  };
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      query: string;
      metric: SearchMetric;
    }>
  >;
  filterLogs: (
    logs: string[],
    query: string,
    metric: SearchMetric
  ) => void;
  logs: string[] | null;
}

const AnalysisTools: React.FC<AnalysisToolsProps> = ({
  searchQuery,
  setSearchQuery,
  filterLogs,
  logs
}) => {
  
  return (
    <div className="AnalysisTools">
      <form>
        <SearchFilter setSearchQuery={setSearchQuery} filterLogs={filterLogs} searchQuery={searchQuery} logs={logs}/>
        <ActionsLister />
      </form>
    </div>
  );
};

export default AnalysisTools;
