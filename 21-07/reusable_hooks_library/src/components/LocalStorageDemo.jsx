import useLocalStorage from "../hooks/useLocalStorage";

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("demo-username", "");

  return (
    <div className="demo-card">
      <span className="tag">useLocalStorage</span>
      <h3>Persisted Input</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
      />
      <p className="hint">Survives refresh — stored as: <code>{name || "—"}</code></p>
    </div>
  );
}

export default LocalStorageDemo;