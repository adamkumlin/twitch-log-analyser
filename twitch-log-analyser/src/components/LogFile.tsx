interface LogFileProps {
  logFile: string;
}

const LogFile: React.FC<LogFileProps> = ({ logFile }) => {

  return (
    <div className="LogFile">
        <p>{logFile}</p>
    </div>
  );
};

export default LogFile;
