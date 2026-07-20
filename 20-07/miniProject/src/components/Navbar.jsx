import { useTheme } from '../context/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <h2>My Theme App</h2>
      <ThemeToggleButton />
    </nav>
  );
}

export default Navbar;