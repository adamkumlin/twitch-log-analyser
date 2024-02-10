interface LogFileProps {
  logFileText: string;
}

const LogFile: React.FC<LogFileProps> = ({ logFileText }) => {
  let logs: string = "";

  let logFileTextLength = logFileText.length;

  for (let i = 0; i < logFileTextLength; i++) {
    if (
      logFileText[i] === "[" &&
      !isNaN(parseInt(logFileText[i + 1])) &&
      !isNaN(parseInt(logFileText[i + 2])) &&
      logFileText[i + 3] === ":" &&
      !isNaN(parseInt(logFileText[i + 4])) &&
      !isNaN(parseInt(logFileText[i + 5])) &&
      logFileText[i + 6] === ":" &&
      !isNaN(parseInt(logFileText[i + 7])) &&
      !isNaN(parseInt(logFileText[i + 8])) &&
      logFileText[i + 9] === "]"
    ) {
      logs = logs + "\n" + logFileText[i];
    } else {
      logs = logs + logFileText[i];
    }
  }

  let splitText = logs.split("\n");

  return (
    <div className="LogFile text-left overflow-auto">
      {splitText.map((line) => (
        <p>{line}</p>
      ))}
    </div>
  );
};

export default LogFile;
