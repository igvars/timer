import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer data-testid="clock"/>
    </div>
  );
}

export default App;
