import type { SearchMetric } from "../types";

interface SearchFilterProps {
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
  filterLogs: (logs: string[], query: string, metric: SearchMetric) => void;
  logs: string[] | null;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  filterLogs,
  logs,
}) => {
  function handleSearch(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    filterLogs(logs, searchQuery.query, searchQuery.metric);
  }
  return (
    <div className="SearchFilter ">
      <label htmlFor="search">Search</label>
      <div className="flex flex-row place-content-center">
        <input
          id={"search"}
          placeholder="Search by..."
          className="text-black"
          type="text"
          onChange={(e) =>
            setSearchQuery((current) => ({ ...current, query: e.target.value }))
          }
        />
        <select
          onChange={(e) =>
            setSearchQuery((current) => ({
              ...current,
              metric: e.target.value as SearchMetric,
            }))
          }
          className=" text-black h-6 self-end bg-slate-300"
          defaultValue={"user"}>
          <option value={"user"}>User</option>
          <option value={"message"}>Message</option>
        </select>
      </div>
      <input
        className="bg-slate-400 text-black"
        type="submit"
        value="Search"
        onClick={(e) => handleSearch(e)}
      />
    </div>
  );
};

export default SearchFilter;
