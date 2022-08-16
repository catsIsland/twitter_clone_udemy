import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Weidget from './components/weidget/Weidget';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Weidget />
    </div>
  );
}

export default App;
