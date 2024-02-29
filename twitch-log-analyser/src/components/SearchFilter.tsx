import type { Logs, SearchMetric, SearchQuery } from "../types";

interface SearchFilterProps {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  filterLogs: (logs: Logs, searchQuery: SearchQuery) => void;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  filterLogs,
  logs,
  setLogs,
}) => {
  function handleSearch(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    filterLogs(logs, searchQuery);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== "") {
      setSearchQuery((current) => ({ ...current, query: e.target.value }));
    } else {
      setLogs((current) => ({
        ...current,
        filteredLogs: [],
      }));
    }
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
          onChange={(e) => handleChange(e)}
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
