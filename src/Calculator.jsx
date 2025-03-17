import { useState } from 'react'

import './App.css'


const Calculator = () => {
    const [input, setInput] = useState("0");
    const [expression, setExpression] = useState("");

    const handleClick = (value) => {
        if (value === "C") {
            setInput("0");
            setExpression("");
        } else if (value === "=") {
            try {
                setInput(eval(expression).toString());
                setExpression(eval(expression).toString());
            } catch {
                setInput("Error");
                setExpression("");
            }
        } else {
            const newExpression =
                expression === "0" && value !== "." ? value : expression + value;
            setExpression(newExpression);
            setInput(newExpression);
        }
    };

    const buttons = [
        "C", "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        ".", "0", "+", "=",
    ];

    return (
        <div className="flex  items-center justify-center h-screen bg-black  text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
                <div className="mb-4 p-4 bg-gray-700 text-right text-2xl w-full h-16 flex items-center justify-end rounded">{input}</div>
                <div className="grid grid-cols-4 gap-2 w-full">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            className={`p-6 text-2xl font-bold rounded shadow-md hover:bg-gray-600 flex items-center justify-center ${btn === "C" ? "bg-red-500" : btn === "=" ? "bg-green-500 col-span-4" : btn === "+" ? "bg-blue-500" : "bg-gray-600"}`}
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Calculator; 