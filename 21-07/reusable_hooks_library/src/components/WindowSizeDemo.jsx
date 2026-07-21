import useWindowSize from "../hooks/useWindowSize";

function WindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div className="demo-card">
      <span className="tag">useWindowSize</span>
      <h3>Viewport Tracker</h3>
      <p className="size-display">{width} * {height}</p>
      <p className="hint">Resize the browser window</p>
    </div>
  );
}

export default WindowSizeDemo;