import { useState } from 'react';

const MIN = 0;
const MAX = 50;

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCount(prevCount => Math.min(prevCount + step, MAX));
    };

    const handleDecrement = () => {
        setCount(prevCount => Math.max(prevCount - step, MIN));
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="counter-card">
            <h1>Counter App</h1>
            <p className="count-display">{count}</p>
            <p className="range-label">Range: {MIN} - {MAX}</p>

            <div className="btns">
                <button onClick={handleDecrement} className="btn decrement" disabled={count === MIN}>-</button>
                <button onClick={handleIncrement} className="btn increment" disabled={count === MAX}>+</button>
            </div>

            <button onClick={handleReset} className="reset-btn">Reset</button>

            <div className="step-selector">
                <p className="step-label">Step size:</p>
                <div className="step-buttons">
                    {[1, 5, 10].map((value) => (
                        <button key={value} onClick={() => setStep(value)} className={step === value ? "step-btn active" : "step-btn"}>+{value}</button>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Counter;