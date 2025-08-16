import React from "react";
import useTimer from "./useTimer";

function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <h2 className="text-2xl font-bold">⏱ Timer: {timer} sec</h2>
      <div className="space-x-2">
        <button 
          onClick={startTimer} 
          className="px-4 py-2 bg-green-500 text-white rounded-lg">
          Start
        </button>
        <button 
          onClick={stopTimer} 
          className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Stop
        </button>
        <button 
          onClick={resetTimer} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Reset
        </button>
      </div>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
    </div>
  );
}

export default TimerComponent;
