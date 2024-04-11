import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.css';
import {Route, Routes } from "react-router-dom";
import Navbarr from './components/Navbarr';
import Home from './files/Home';
import Mess from './files/Mess';
import Complaints from './files/Complaints';
import Warden from './files/Warden';
import About from './files/About';

function App() {
  return (
    <>
    <div className='App'>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/mess" element={<Mess/>}/>
      <Route path="/complaints" element={<Complaints/>}/>
      <Route path="/warden" element={<Warden/>}/>
     </Routes> 
    <Navbarr/>
    {/* <Home/>
    <Mess/>
    <Complaints/> */}
    </div>
    </>
  );
}

export default App;
