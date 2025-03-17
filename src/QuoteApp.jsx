import { useState } from "react";

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
];

const colors = ['red-500', 'blue-500', 'green-500', 'yellow-500', 'purple-500'];
const textColor = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];

const QuoteMachine = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const getRandomQuote = () => {
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        setQuoteIndex(randomQuoteIndex);
        setColorIndex(randomColorIndex);
    };

    return (
        <div className={`flex items-center justify-center w-screen h-screen bg-${colors[colorIndex]}  transition-all duration-500`}>
            <div className={`bg-gray-800 p-6 rounded-lg bg-white border-2 border-white  shadow-lg max-w-md text-center ${textColor[colorIndex]}   p-4 transition-all duration-500`}>
                <p className="text-xl font-semibold">"{quotes[quoteIndex].text}"</p>
                <p className="text-sm mt-2 italic">- {quotes[quoteIndex].author}</p>
                <button
                    onClick={getRandomQuote}
                    className="mt-4 text-white-900 font-bold py-2 px-4 rounded transition duration-300 border-2      "
                >
                    New Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteMachine;