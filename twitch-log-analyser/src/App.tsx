import { useState } from "react";
import Settings from "./components/Settings";
import LogFile from "./components/LogFile";

const App: React.FC = () => {

  const [logFileText, setLogFileText] = useState<string>("");

  return (
    <div className="App text-center bg-slate-900 text-white p-4">
      <h1 className="font-mono text-5xl">Twitch Log Analyser</h1>
      <Settings setLogFileText={setLogFileText}/>

      {logFileText !== "" ? <LogFile logFile={logFileText}/> : null}
    </div>
  );
};

export default App;
