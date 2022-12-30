import React,{useState} from 'react'
import Navbar from './Navbar';
import { signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";
import {auth} from './firebase-config'
import {useNavigate} from "react-router-dom"



function Login() {
const [logMail, setLogMail]=useState("")
const [logPass, setLogPass]=useState("")
const [forgotPass, setforgotPass]=useState("")
const navigation= useNavigate();
const logIn = async () =>{
  try {
    signInWithEmailAndPassword(auth, logMail, logPass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user.uid)
    localStorage.setItem('userID', JSON.stringify(user.uid));

   navigation('/Selectuser')
    

  })
  .catch((error) => {
   console.log(error)
  });
  } catch (error) {
    console.log(error)
  }
  
}
const sendLink = async () =>{
  sendPasswordResetEmail(auth, forgotPass)
  .then(() => {
    
    alert("a password reset mail has been sent")
  })
  .catch((error) => {
    console.log(error)
  });
 }
  return (
    <>
    <Navbar  home="signup"/>
    <div className="container">
      <form>
    <label>Email</label>
      <input type="email" placeholder="someone@something.com" id="logEmail" onChange={(event) => setLogMail(event.target.value)} required/>
      <label>Password</label>
      <input type="password" placeholder="enter a strong password" id="logPass" onChange={(event) => setLogPass(event.target.value)} required/>
      <button type="button" onClick={logIn}>Login</button>
      </form>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Forgot Password
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Send Password Reset Mail</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="email" placeholder="enter your mail here" onChange={(event)=> setforgotPass(event.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
        <button type="button" className="btn btn-primary" onClick={sendLink}>Send link</button>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Login
