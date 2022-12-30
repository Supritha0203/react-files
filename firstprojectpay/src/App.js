import './App.css';
import React from 'react'
import './components/firebase-config'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes,  Route} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Selectuser from './components/Selectuser';
import Heiprofile from './components/Heiprofile';
import Faprofile from './components/Faprofile';
import Adminprofile from './components/Adminprofile';
import Createproject from './components/Createproject';
import Toheidash from './components/Toheidash';
import Toviewproject from './components/Toviewproject';
import Applynow from './components/Applynow';
import Tofadash from './components/Tofadash';



function App() {
 
  return(
    <>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>  {/*done */}
      <Route path="/Login" element={<Login/>}></Route>  {/*done */}
      <Route path="/Selectuser" element={<Selectuser/>}></Route>    {/*done */}
      <Route path="/Heiprofile" element={<Heiprofile/>}></Route>{/*done */}
      <Route path="/Faprofile" element={<Faprofile/>}></Route>  {/*done */}
      <Route path="/Adminprofile" element={<Adminprofile/>}></Route>  {/*done */}
      <Route path="/Createproject" element={<Createproject/>}></Route>  {/*done */}
      <Route path="/Toheidash" element={<Toheidash/>}></Route>  {/*done */}
      <Route path="/Toviewproject" element={<Toviewproject/>}></Route>  {/*done */}
      <Route path="/Applynow" element={<Applynow/>}></Route>  {/*done */}
      <Route path="/Tofadash" element={<Tofadash/>}></Route> 

    </Routes>
    </>
  )
}

export default App;
