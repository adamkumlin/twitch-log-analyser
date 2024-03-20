import type { Logs, SearchMetric, SearchQuery } from "../types";

interface SearchFilterProps {
  searchQuery: SearchQuery;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQuery>>;
  logs: Logs;
  setLogs: React.Dispatch<React.SetStateAction<Logs>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchQuery,
  setSearchQuery,
  logs,
  setLogs,
}) => {
  function handleSearch(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    e.preventDefault();
    filterLogs(logs, searchQuery);
  }

  function filterLogs(logs: Logs, searchQuery: SearchQuery): void {
    let results: string[] = [];

    if (!searchQuery.query || !searchQuery.metric || !logs.originalLogs) {
      return;
    }

    if (searchQuery.metric === "user") {
      for (let log of logs.originalLogs) {
        // Split into timestamp, username and rest of message, get the username and remove the colon (last character)
        const userName: string = log.split(" ")[1].slice(0, -1);
        if (userName && userName.includes(searchQuery.query)) {
          results.push(log);
        }
      }
    } else {
      for (let log of logs.originalLogs) {
        // Split into timestamp, username and rest of message, get the first three (the timestamp and the username), and join
        const logDetails = log.split(":").slice(0, 3).join();

        // If log includes query starting from the timestamp and username, i.e. the message plus one to account for the colon
        if (log.includes(searchQuery.query, logDetails.length + 1)) {
          results.push(log);
        }
      }
    }
    setLogs((current) => ({
      ...current,
      filteredLogs: results,
    }));
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
    <>
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
    </>
  );
};

export default SearchFilter;
