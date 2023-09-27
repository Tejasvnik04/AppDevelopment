import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
function App() {
  return (
    
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
     </Routes>
     
  
  );
}

export default App;
