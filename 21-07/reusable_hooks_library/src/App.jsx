import ToggleDemo from "./components/ToggleDemo";
import LocalStorageDemo from "./components/LocalStorageDemo";
import FetchDemo from "./components/FetchDemo";
import DebounceDemo from "./components/DebounceDemo";
import WindowSizeDemo from "./components/WindowSizeDemo";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid" />

      <header className="app-header">
        <h1>Reusable Hooks Library</h1>
        <p className="subtitle">
          Five isolated modules — each one plugs its logic into any component, no rewiring needed.
        </p>
      </header>

      <div className="grid">
        <div className="module accent-violet"><ToggleDemo /></div>
        <div className="module accent-teal"><LocalStorageDemo /></div>
        <div className="module accent-amber"><FetchDemo /></div>
        <div className="module accent-pink"><DebounceDemo /></div>
        <div className="module accent-blue"><WindowSizeDemo /></div>
      </div>
    </div>
  );
}

export default App;