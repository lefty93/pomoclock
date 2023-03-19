import "./App.css";
import "./components/AudioPlayer.css"
import PomodoroTimer from "./components/PomodoroTimer";


import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className='App'>
      <PomodoroTimer />
      <AudioPlayer />
    </div>
  );
}

export default App;
