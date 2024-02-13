import SearchFilter from "./SearchFilter";

interface SearchToolsProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchTools: React.FC<SearchToolsProps> = ({searchQuery, setSearchQuery}) => {

    return (
        <div className="SearchTools">
            <SearchFilter setSearchQuery={setSearchQuery} />
        </div>
    )
}

export default SearchTools;