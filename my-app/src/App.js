
import './App.css';
import About from './components/About';
//import Card2 from './components/Card2';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Sample from './components/Sample';

import {
  Link,
  Routes,
  Route,useNavigate
} from "react-router-dom";
 

function App() {
 
  
  return (
   <>     
  <Routes>
    <Route path="/" element={<About/>}></Route>
    <Route path="/sample" element={<TextForm/>}></Route>
  </Routes>
   </>
  );
}

export default App;
