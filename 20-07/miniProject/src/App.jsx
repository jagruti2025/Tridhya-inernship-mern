import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
   
    <ThemeProvider>
      <div className="app-wrapper">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;