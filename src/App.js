import MainBodyComponent from './components/MainBodyComponent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <MainBodyComponent />
    </div>
  );
}

export default App;
