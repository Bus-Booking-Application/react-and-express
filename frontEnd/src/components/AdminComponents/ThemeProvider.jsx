// // admin src/components/ThemeProvider.jsx
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// useTheme hook moved to a separate file


