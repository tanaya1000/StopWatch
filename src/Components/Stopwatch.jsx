import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRuning] = useState(false);

  const startTimer = () => {
    setIsRuning(true);
    console.log("qqqqqqqq");
  };
  const stopTimer = () => {
    setIsRuning(false);
  };
  const ResetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <>
      <div
        className="container mx-auto shadow-lg 
       m-5 p-3 mb-5 bg-body-tertiary rounded-4  w-25">
        <span className="fw-bold">Clock⏰</span>
        <div
          className="circle bg-white mx-auto m-3 
          rounded-circle border border-dark border-5 d-flex justify-content-center align-items-center"
          style={{ width: "200px", height: "200px" }}>
          <div className="fs-2 font-monospace">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 10) % 100)).slice(-2)}
          </div>
        </div>
        {!isRunning && (
          <div className="btn1 p-2 mb-3 d-flex justify-content-center align-items-center ">
            <button
              type="button"
              className=" btn btn-white shadow-lg fw-bold"
              style={{ padding: "10px 70px" }}
              onClick={startTimer}>
              Start
            </button>
          </div>
        )}
        {isRunning && (
          <div className="btn1 p-2 mb-3 d-flex justify-content-center align-items-center ">
            <button
              type="button"
              className=" btn btn-white shadow-lg fw-bold"
              style={{ padding: "10px 70px" }}
              onClick={stopTimer}>
              Stop
            </button>
          </div>
        )}
        <div className="btn2 mb-3 d-flex justify-content-center align-items-center ">
          <button
            type="button"
            className="btn btn-white text-danger shadow-lg fw-bold"
            style={{ padding: "10px 70px" }}
            onClick={ResetTimer}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
