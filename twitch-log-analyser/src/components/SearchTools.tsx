import { SearchMetric } from "../types";
import SearchFilter from "./SearchFilter";

interface SearchToolsProps {
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

const SearchTools: React.FC<SearchToolsProps> = ({
  searchQuery,
  setSearchQuery,
  filterLogs,
  logs
}) => {
  function handleSearch(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    filterLogs(logs, searchQuery.query, searchQuery.metric);
  }
  return (
    <div className="SearchTools">
      <form>
        <SearchFilter setSearchQuery={setSearchQuery} />
        <input
          className="bg-slate-400 text-black"
          type="submit"
          value="Search"
          onClick={(e) => handleSearch(e)}
        />
      </form>
    </div>
  );
};

export default SearchTools;
