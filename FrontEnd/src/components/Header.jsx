import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="w-full bg-primary text-primary-foreground p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Travel Management System</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <button 
        onClick={toggleTheme} 
        className="bg-secondary text-secondary-foreground px-3 py-1 rounded"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}
