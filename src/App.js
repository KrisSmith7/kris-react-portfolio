import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <About />
    </div>
  );
}

export default App;
