
import './App.css';
import Addcourse from './components/Addcourse';
import Courseview from './components/Courseview';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Courseview/> */}
      <Addcourse/>
    </div>
  );
}

export default App;
