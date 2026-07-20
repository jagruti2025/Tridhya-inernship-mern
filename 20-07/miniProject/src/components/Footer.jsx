import { useTheme } from '../context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${theme}`}>
      <p>© {year} My Theme App — Built with React Context API</p>
      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;