import './App.css';
import Accordions from './components/Accordions';
import Buttons from './components/Buttons';
import TabsSeparate from './components/Tabs';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Lightning Design System Demo!</h1>
      </header>
      <main className='grid-wrapper'>
        <Buttons />
        <Accordions />
        <TabsSeparate />
      </main>
      <footer className='footer'>
        <h3>Made with ❤️ by DeMars</h3>
      </footer>
    </div>
  );
}

export default App;
