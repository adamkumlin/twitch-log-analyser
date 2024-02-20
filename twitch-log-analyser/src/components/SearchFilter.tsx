import type { SearchMetric } from "../types";

interface SearchFilterProps {
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      query: string;
      metric: SearchMetric;
    }>
  >;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ setSearchQuery }) => {
  return (
    <div className="SearchFilter">
      <label htmlFor="search" className="block">Search</label>
      <input
        id={"search"}
        placeholder="Search by..."
        className="text-black h-5"
        type="text"
        onChange={(e) => setSearchQuery(current => ({...current, query: e.target.value}))}
      />
      <select onChange={(e) => setSearchQuery(current => ({...current, metric: e.target.value as SearchMetric}))} className="h-5 text-black relative" defaultValue={"user"}>
        <option value={"user"}>User</option>
        <option value={"message"}>Message</option>
      </select>
    </div>
  );
};

export default SearchFilter;
