import React, { useState, useEffect, useRef } from "react";


interface TimerState {
  seconds: number;
  isRunning: boolean;
}

const Timer: React.FC = () => {
  const [timer, setTimer] = useState<TimerState>({ seconds: 0, isRunning: false });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const startTimer = () => {
    if (!timer.isRunning) {
      setTimer((prev) => ({ ...prev, isRunning: true }));
      intervalRef.current = setInterval(() => {
        setTimer((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
      }, 1000);
    }
  };


  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer((prev) => ({ ...prev, isRunning: false }));
  };

  // Reset timer
  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimer({ seconds: 0, isRunning: false });
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>⏱ Timer: {timer.seconds} seconds</h1>
      <button onClick={startTimer} disabled={timer.isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!timer.isRunning}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
