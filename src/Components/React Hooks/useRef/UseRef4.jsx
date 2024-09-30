import React, { useRef, useState } from 'react';

const UseRef4 = () => {
    const timer = useRef(null);
    const [time, setTime] = useState(0);

    const startTimer = () => {
        // Ensure no multiple intervals are set
        if (!timer.current) {
            timer.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
                console.log('Timer is Running...');
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timer.current);
        timer.current = null;
        console.log('Timer is Stopped.');
    };

    return (
        <div>
            <button onClick={startTimer}>Start Timer</button>
            <br />
            <button onClick={stopTimer}>Stop Timer</button>
            <p>{time}</p>
        </div>
    );
};

export default UseRef4;