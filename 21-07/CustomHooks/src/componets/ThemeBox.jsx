import { useState } from "react";
import useToggle from "../CustomHooks/useToggle";

export default function ThemeBox() {

    let [isDark, toggleDark] = useToggle(false)

    return (
        <div style={{
            background: isDark ? "#222" : "#fff",
            color: isDark ? "#fff" : "#222",
            padding: "20px",
            borderRadius: "8px",
        }}>
            <p>Current Mode :  {isDark ? "Dark" : "Light"} </p>
            <button onClick={toggleDark}>ToggleTheme</button>
        </div>
    );
}