interface UploadedFileProps {
  logFile: File | null;
}

const UploadedFile: React.FC<UploadedFileProps> = ({ logFile }) => {
  const now = new Date();

  const uploadDateTime: string = now.toLocaleString("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (logFile) {
      return (
        <div className="UploadedFile rounded-lg ">
          <h2>{logFile.name}</h2>
          <p>{uploadDateTime}</p>
          <p>{Math.round(logFile.size / 1000) + " KB"}</p>
        </div>
      );
  } else {
    return null;
  }
};

export default UploadedFile;
