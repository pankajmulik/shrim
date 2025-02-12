
import './App.css';
import Navbar from './component/navbar/Navbar';
import AllMobiles from './pages/Allmobiles';
import Home from './pages/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/' element={ <Home/>} />
          <Route path='/all-mobiles' element={ <AllMobiles/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
