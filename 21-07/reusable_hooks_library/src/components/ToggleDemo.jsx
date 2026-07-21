import useToggle from "../hooks/useToggle";

function ToggleDemo() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div className="demo-card">
      <span className="tag">useToggle</span>
      <h3>Switch</h3>
      <p className="status-line">
        <span className={`dot ${isOn ? "dot-on" : "dot-off"}`} />
        {isOn ? "Active" : "Inactive"}
      </p>
      <button className="btn" onClick={toggle}>Flip state</button>
    </div>
  );
}

export default ToggleDemo;