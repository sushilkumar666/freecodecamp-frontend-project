import { useState, useEffect } from 'react'
import './App.css'


const drumPads = [
    { key: "Q", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", label: "Heater 1" },
    { key: "W", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", label: "Heater 2" },
    { key: "E", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", label: "Heater 3" },
    { key: "A", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", label: "Heater 4" },
    { key: "S", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", label: "Clap" },
    { key: "D", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", label: "Open-HH" },
    { key: "Z", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", label: "Kick-n'-Hat" },
    { key: "X", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", label: "Kick" },
    { key: "C", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", label: "Closed-HH" }
];

const DrumMachine = () => {
    const [display, setDisplay] = useState("Press a key");

    const playSound = (sound, label) => {
        const audio = new Audio(sound);
        audio.play();
        setDisplay(label);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            const pad = drumPads.find((p) => p.key === event.key.toUpperCase());
            if (pad) playSound(pad.sound, pad.label);
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <div id="drum-machine" className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Drum Machine</h1>
                <div id="display" className="p-2 mb-4 text-center bg-gray-700 rounded">{display}</div>
                <div className="grid grid-cols-3 gap-4">
                    {drumPads.map((pad) => (
                        <button
                            key={pad.key}
                            className="p-4 bg-gray-600 rounded shadow-md hover:bg-gray-500 focus:outline-none"
                            onClick={() => playSound(pad.sound, pad.label)}
                        >
                            {pad.key}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DrumMachine;