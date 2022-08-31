import './App.css';
import SuccessWindow from './components/SuccessWindow';
import ErrorWindow from './components/ErrorWindow';
import LoadingWindow from './components/LoadingWindow';

function App() {

  return (
    <div className="App">
      <SuccessWindow/>
      <ErrorWindow/>
      <LoadingWindow/>
    </div>
  );
}

export default App;
