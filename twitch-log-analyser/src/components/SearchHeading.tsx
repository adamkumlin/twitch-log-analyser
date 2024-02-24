import UploadedFile from "./UploadedFile";

interface SearchHeadingProps {
    logFile: File | null;
}

const SearchHeading: React.FC<SearchHeadingProps> = ({logFile}) => {

    return (
        <div className="SearchHeading w-52 absolute left-2/3 top-0">
            <UploadedFile logFile={logFile} image={"/file-background-preview.png"} style="relative bottom-12 text-black" titleOnly={true}/>
        </div>
    )
}

export default SearchHeading;