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

  return (
    <div className="UploadedFile">
      <h2>{logFile ? logFile.name : null}</h2>
      <p>{logFile ? uploadDateTime : null}</p>
      <p>{logFile ? Math.round(logFile.size / 1000) + " KB" : null}</p>
      <img src="/file-background.png" alt="" />
    </div>
  );
};

export default UploadedFile;
