import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceDemo() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <div className="demo-card">
      <span className="tag">useDebounce</span>
      <h3>Delayed Echo</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <p className="hint">Live: <code>{text || "—"}</code></p>
      <p className="hint">After 500ms: <code>{debouncedText || "—"}</code></p>
    </div>
  );
}

export default DebounceDemo;