// import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Logo from './components/Forecast/Logo/Logo';

function App() {

const year = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
      <Logo />
        <h1>Weather App</h1>
        </header>
        <main>
          <Forecast />
        </main>
        <footer>
          <p>Created by &copy;Soulsounds Media {year}</p>
        </footer>
      
    </div>
  );
}

export default App;
