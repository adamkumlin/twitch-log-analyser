interface SettingsProps {
  setLogFileText: React.Dispatch<React.SetStateAction<string>>;
}

const Settings: React.FC<SettingsProps> = ({ setLogFileText }) => {
  function handleFileInput(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (ev) => {
      setLogFileText(ev.target.result);
    };
    reader.readAsText(file);
  }

  return (
    <div className="Settings">
      <form className="flex flex-row justify-center p-12">
        <input className="" type="file" id="search" onInput={(e) => handleFileInput(e)} />
      </form>
    </div>
  );
};

export default Settings;
