import React from 'react'
import {db} from './firebase-config'
import { ref, set } from "firebase/database";
import {useState} from 'react'

function Faprofile() {
    const [details, setDetails] = useState({
        orgname:"",
        fatype:"",
        eyear:"",
        founder:"",
        phone:"",
        portfolio:"",
        link:"",
        state:"",
        district:"",
        pincode:""
    })
    const handleChange = (e) =>{
        const name1= e.target.name;
        const value1 = e.target.value;
        setDetails((prev) => {
            return{...prev, [name1]: value1 }
        })
    }
    const uploadDetails = (e) =>{
        const userid= localStorage.getItem('userID')
        set(ref(db, 'FA/'  + userid), {
            OrganizationName:details.orgname,
            OrganizationType:details.fatype,
            EstablishedYear:details.eyear,
            Founder:details.founder,
            PhoneNo:details.phone,
            Portfolio:details.portfolio,
            Link:details.link,
            State:details.state,
            District:details.district,
            Pincode:details.pincode
        }).then(()=>{
            alert("data stored successfully")
          });
        
    }
  return (
   <>
   <div className="mainbx">
        <h2>Funding Agency Profile</h2>
        <div className="contentbx">
            <form action="" className="contact-form">
                <div className="profilepic">
                    <img src="circle-user-solid.svg" className="round" id="image" alt="logo"/>
                    <label className="form-label">Profile Picture</label>
                    <div className="input-group mb-3">
                        <input type="file" id="photo" name="photo" className="form-control"/>
                        <button className="btn btn-outline-secondary" type="button"  id="upld" >Upload</button>
                    </div>
                </div><br/>

                <div className="mb-3">
                    <label className="form-label">Name of Organisation</label>
                    <input type="text" className="form-control name" id="orgname" name="orgname" required placeholder="Organisation Name" onChange={handleChange}/>
                </div>
                <div>
                    <label className="form-label">Funding Agency Type</label>
                    <select className="form-select cat" id="fatype" name="fatype" required aria-label=".form-select-sm example" onChange={handleChange}>
                        <option value="select" selected disabled>Select</option>
                        <option value="govt">Government</option>
                        <option value="govt/aided">Government-Aided</option>
                        <option value="private">Private</option>
                    </select>
                </div><br/>

               

                <div className="mb-3">
                    <label className="form-label">Year of Establishment</label>
                    <input type="text" className="form-control established" id="eyear" name="eyear" onChange={handleChange} required placeholder="year"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Founder Name</label>
                    <input type="text" className="form-control" id="founder" name="founder" onChange={handleChange} required placeholder="Founder Name"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone no</label>
                    <input type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} required placeholder="Phone no"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Portfolio link</label>
                    <input type="link" className="form-control" id="portfolio" name="portfolio" onChange={handleChange} required placeholder="year"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Social Media link</label>
                    <input type="link" className="form-control" id="link" name="link" onChange={handleChange} required placeholder="year"/>
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">State</label>
                        <input type="text" className="form-control" id="state" name="state" onChange={handleChange} required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">District</label>
                        <input type="text" className="form-control" id="district" name="district" onChange={handleChange} required/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Pincode</label>
                        <input type="text" className="form-control pincode" id="pincode" name="pincode" onChange={handleChange} required/>
                    </div>
                </div><br/>

                <label className="form-label" id="declare">Declaration document</label>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="upld"
                        >Upload</button>
                </div><br/>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button" id="sub" onClick={uploadDetails} >Submit</button>
                </div>
            </form>

        </div>
    </div>
   </>
  )
}

export default Faprofile
