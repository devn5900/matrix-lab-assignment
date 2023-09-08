import './App.css';
import Home from './components/Home';
import TogglerProvider from './components/context/TogglerProvider';

function App() {
  return (
    <TogglerProvider>
    <Home/>
    </TogglerProvider>
  );
}

export default App;
