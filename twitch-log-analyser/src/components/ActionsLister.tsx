import type { LogSettings, Logs } from "../types";

interface ActionsListerProps {
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
}

const ActionsLister: React.FC<ActionsListerProps> = ({ logSettings, setLogSettings }) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "showModActions") {
      if (!logSettings.showModActions) {
        setLogSettings((current) => ({
          ...current,
          showModActions: true,
        }));
      } else {
        setLogSettings((current) => ({
          ...current,
          showModActions: false,
        }));
        return;
      }
    } else {
      if (logSettings.showTimestamps) {
        setLogSettings((current) => ({
          ...current,
          showTimestamps: false,
        }));
      } else {
        setLogSettings((current) => ({
          ...current,
          showTimestamps: true,
        }));
      }
    }
  }
  return (
    <div className="ActionsLister">
      <label htmlFor="showModActions">Show moderator actions</label>
      <input
        id="showModActions"
        type="checkbox"
        checked={logSettings.showModActions}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="showTimestamps">Show timestamps</label>
      <input
        type="checkbox"
        id="showTimestamps"
        checked={logSettings.showTimestamps}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default ActionsLister;
