import React,{useState} from 'react'
import {auth,provider} from './firebase-config'
import {createUserWithEmailAndPassword , sendEmailVerification , signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {Link} from 'react-router-dom'
import Navbar from './Navbar';


function Signup() {
    const [registerMail, setregisterMail]= useState("")
    const [registerPassword, setregisterPassword]= useState("")
    const [registerCpassword, setregisterCpassword]= useState("")
  
    const register =async () =>{
      if( registerPassword === registerCpassword){
      try {
        const newUser = await createUserWithEmailAndPassword(auth, registerMail, registerPassword)
        console.log(newUser)
        console.log(newUser.user.emailVerified)
        console.log(newUser.user.uid)
  
        sendEmailVerification(auth.currentUser).then(alert("a verification link is sent to the registered email"))
  
        //alert("a verification link is sent to the registered email")
      } catch (error) {
        console.log(error)
      }
    }
    else{
      alert("please check both the passwords")
    }
    }
  
    const googleRegister=()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential)
        console.log(token)
        console.log(user)
      }).catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        console.log(error)
      });
    }
    return (
      <>
      <Navbar  home="login"/>
     <div className="container">
      <h1>Registration Form</h1>
      <form>
        <label>Email</label>
      <input type="email" placeholder="someone@something.com" id="regEmail" onChange={(event) => setregisterMail(event.target.value)}/>
      <label>Password</label>
      <input type="password" placeholder="enter a strong password" id="regPass" onChange={(event) => setregisterPassword(event.target.value)}/>
      <label>Confirm Password</label>
      <input type="password" placeholder="match with the password" id="regConfirm" onChange={(event) => setregisterCpassword(event.target.value)}/>
      <button  type="button" onClick={register} >Create User</button>
      </form>
      <button className="btn btn-primary" onClick={googleRegister}>SignIn with Google</button>
         </div>
  <Link to="/Login" className='btn btn-primary'>login</Link>
      </>
    );
}

export default Signup
