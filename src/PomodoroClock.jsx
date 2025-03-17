import { useState, useEffect } from "react";

const PomodoroClock = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [breakTime, setBreakTime] = useState(5 * 60);
    const [sessionTime, setSessionTime] = useState(25 * 60);
    const [onBreak, setOnBreak] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setOnBreak((prevBreak) => !prevBreak);
                        return onBreak ? sessionTime : breakTime;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning, onBreak, breakTime, sessionTime]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    const adjustTime = (type, amount) => {
        if (type === "break") {
            setBreakTime((prev) => Math.max(60, prev + amount));
        } else {
            setSessionTime((prev) => Math.max(60, prev + amount));
            setTimeLeft(Math.max(60, sessionTime + amount));
        }
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
        setSessionTime(25 * 60);
        setBreakTime(5 * 60);
        setOnBreak(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#1e555c] text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Pomodoro Clock</h1>
                <div className="mb-4">
                    <div className="text-center mb-2">Break Length</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-700 rounded" onClick={() => adjustTime("break", -60)}>-</button>
                        <span>{breakTime / 60}</span>
                        <button className="px-3 py-1 bg-gray-700 rounded" onClick={() => adjustTime("break", 60)}>+</button>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="text-center mb-2">Session Length</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-gray-700 rounded" onClick={() => adjustTime("session", -60)}>-</button>
                        <span>{sessionTime / 60}</span>
                        <button className="px-3 py-1 bg-gray-700 rounded" onClick={() => adjustTime("session", 60)}>+</button>
                    </div>
                </div>
                <div className="text-5xl font-bold mb-4">{formatTime(timeLeft)}</div>
                <div className='flex gap-2'>
                    <button
                        className="px-4 py-2 bg-blue-500 rounded shadow-md hover:bg-blue-600 "
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {isRunning ? "Pause" : "Start"}
                    </button>
                    <button className="px-4 py-2 bg-red-500 rounded shadow-md hover:bg-red-600" onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default PomodoroClock;
