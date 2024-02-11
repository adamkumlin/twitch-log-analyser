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
      <img src="/file-background.png" alt="File icon" />
      <div className="relative -top-64 text-black">
        <h2 className="font-bold mb-4">{logFile ? logFile.name : null}</h2>
        <p className="text-gray-700">{logFile ? uploadDateTime : null}</p>
        <p className="text-gray-700">
          {logFile ? Math.round(logFile.size / 1000) + " KB" : null}
        </p>
      </div>
    </div>
  );
};

export default UploadedFile;
