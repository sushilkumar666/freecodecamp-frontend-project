import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuoteApp from "./QuoteApp"; // 1st Project
import MarkdownPreviewer from "./MarkdownPreviewer"; // 2nd Project
import DrumMachine from "./DrumMachine"; // 3rd Project
import Calculator from "./Calculator"; // 4th Project
import PomodoroClock from "./PomodoroClock"; // 5th Project
import './App.css'

function App() {
  return (
    <Router>
      <div className="w-screen">
        <div className="flex flex-col items-center gap-4 p-4">
          <h1 className="text-2xl font-bold">Multi UI Projects</h1>
          <nav className="flex gap-4">
            <Link to="/quotes">Quotes</Link>
            <Link to="/markdown">Markdown</Link>
            <Link to="/drum">Drum</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/pomodoro">Pomodoro</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/quotes" element={<QuoteApp />} />
          <Route path="/markdown" element={<MarkdownPreviewer />} />
          <Route path="/drum" element={<DrumMachine />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pomodoro" element={<PomodoroClock />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
