import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import './selectuser.css'

function Selectuser() {
    const navigate = useNavigate();
    const [radioInput, setRadioInput]= useState('')
    const redirectUser= event =>{
        if(radioInput === "hei"){
            navigate('/Heiprofile')
        }
        else if(radioInput === "fa"){
            navigate('/Faprofile')
        }
        else{
            navigate('/Adminprofile')
        }
    }
  return (
   <>
     <div className="main-container">
        <h2>Identify yourself</h2>
        <div className="radio-buttons" >
            <label className="custom-radio">
                <input type="radio" name="radio" id="admin" value="admin" onChange={(event) => setRadioInput(event.target.value)}/>
                <span className="radio-btn"><i className="fa-solid fa-check"></i>
                    <div className="admin">
                        <i className="fa-solid fa-user-large"></i>
                        <h3>Admin</h3>
                    </div>
                </span>
            </label>
            <label className="custom-radio">
                <input type="radio" name="radio" id="funding" value="fa" onChange={(event) => setRadioInput(event.target.value)}/>
                <span className="radio-btn"><i className="fa-solid fa-check" value="fa" ></i>
                    <div className="admin">
                        <i className="fa-solid fa-users"></i>
                        <h3>Funding Agency</h3>
                    </div>
                </span>
            </label>
            <label className="custom-radio">
                <input type="radio" name="radio" id="higher" value="hei" onChange={(event) => setRadioInput(event.target.value)}/>
                <span className="radio-btn"><i className="fa-solid fa-check" value="hei" ></i>
                    <div className="admin">
                        <i className="fa-solid fa-building-columns"></i>
                        <h3>HEI</h3>
                    </div>
                </span>
            </label>
        </div>
        <button className="btn btn-primary " type="button" onClick={redirectUser}>Submit</button>

    </div>


    <i className="fa-solid fa-users"></i>
    <i className="fa-solid fa-building-columns"></i>
   </>
  )
}

export default Selectuser
