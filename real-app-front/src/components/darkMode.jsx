import React, { useState, useEffect } from "react";
import "../darkMode.css";
function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`DarkMode ${theme} navbar-light bg-dark-subtle`}>
      <button className="btn btn-primary" onClick={toggleTheme}>
        Light/Dark Mode
      </button>
    </div>
  );
}
export default DarkMode;
