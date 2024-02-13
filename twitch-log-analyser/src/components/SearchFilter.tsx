interface SearchFilterProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchFilter: React.FC<SearchFilterProps> = ({setSearchQuery}) => {

    return (
        <div className="SearchFilter">
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
    )
}

export default SearchFilter;