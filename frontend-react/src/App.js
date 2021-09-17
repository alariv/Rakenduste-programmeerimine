import logo from './logo.svg';
import './App.css';
import Greeting from './components/Creeting'
import Fun from './components/Fun'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing-testing!
        </p>
        <Greeting greeting="Hodwy" msg="sisu"></Greeting>
        <Fun></Fun>
      </header>
    </div>
  );
}

export default App;
