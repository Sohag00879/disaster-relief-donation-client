import { Switch } from "antd";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem('isDark');
    if (dark) {
      setDarkMode(JSON.parse(dark));
    }
  }, []);

  const onChange = async() => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('isDark', JSON.stringify(newDarkMode));
  };
  return (
    <div className={darkMode? 'bg-neutral-950 text-white' : 'white'}>
    <div className="flex justify-end me-2">
      <h1 className="me-1">{darkMode? "Dark" : "Light"}</h1>
      <Switch
        onChange={onChange}
        checked={darkMode}
        style={{ backgroundColor: darkMode? "white" : "black" }}
      />
    </div>
  </div>
  )
}

export default ThemeSwitch




