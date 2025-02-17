
import './App.css';
import Navbar from './component/navbar/Navbar';
import AdminHomepage from './pages/AdminHomepage';
import AllMobiles from './pages/Allmobiles';
import Home from './pages/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/home' element={ <Home/>} />
          <Route path='/all-mobiles' element={ <AllMobiles/>} />
          <Route path='/admin/santu' element={<AdminHomepage/> } />

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
