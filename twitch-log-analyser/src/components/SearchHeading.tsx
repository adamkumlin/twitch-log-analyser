import UploadedFile from "./UploadedFile";

interface SearchHeadingProps {
    logFile: File | null;
}

const SearchHeading: React.FC<SearchHeadingProps> = ({logFile}) => {

    return (
        <div className="SearchHeading">
            <UploadedFile logFile={logFile}/>
        </div>
    )
}

export default SearchHeading;