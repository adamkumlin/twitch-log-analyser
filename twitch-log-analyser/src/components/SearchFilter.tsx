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
    </div>
  );
};

export default SearchFilter;
