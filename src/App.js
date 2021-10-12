import './App.css';
import Accordions from './components/Accordions';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lightning Design System Demo!</h1>
      </header>
      <main className='grid-wrapper'>
        <Buttons />
        <Accordions />
      </main>
    </div>
  );
}

export default App;
