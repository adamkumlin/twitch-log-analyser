import type { LogSettings } from "../types";

interface ActionsListerProps {
  logs: string[] | null;
  logSettings: LogSettings;
  setLogSettings: React.Dispatch<React.SetStateAction<LogSettings>>;
}

const ActionsLister: React.FC<ActionsListerProps> = ({
  logs,
  logSettings,
  setLogSettings,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
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
