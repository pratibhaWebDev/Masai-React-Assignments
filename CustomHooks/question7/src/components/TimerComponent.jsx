import React from "react";
import useTimer from "./useTimer";

function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">⏱ Timer: {timer} seconds</h2>
      <p className="mb-4">{isRunning ? "Running..." : "Stopped"}</p>
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={startTimer} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button 
          onClick={stopTimer} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
        <button 
          onClick={resetTimer} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerComponent;
