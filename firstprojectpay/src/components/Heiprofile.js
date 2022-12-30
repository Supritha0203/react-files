import React, {useState} from 'react'
import {db} from './firebase-config'
import { ref, set } from "firebase/database";


function Heiprofile() {
    const [details, setDetails] = useState({
        heiname:"",
        year:"",
        nba:"",
        naac:"",
        nirf:"",
        princi:"",
        phone:"",
        state:"",
        district:"",
        pincode:"",
        social:"",
        Brochure:"",
        decdoc:""
    });

    const handleChange = (e) =>{
        const name1= e.target.name;
        const value1 = e.target.value;
        setDetails((prev) => {
            return{...prev, [name1]: value1 }
        })
    }

    const uploadDetails = (e) =>{
        const userid= localStorage.getItem('userID')
        set(ref(db, 'HEI/'  + userid), {
           HeiName:details.heiname,
           Principal:details.princi,
           EstablishedYear: details.year,
           NbaAccreditation:details.nba,
           NaacAccreditation:details.naac,
           NirfRank:details.nirf,
           PhoneNo:details.phone,
           State:details.state,
           District:details.district,
           Pincode:details.pincode,
           SocialMedia:details.social,

          }).then(()=>{
            alert("data stored successfully")
          });
        
    }

  return (
    <>
    <div className="mainbx">
        <h2>Higher Educational Institution Profile</h2>
        <div className="contentbx">
   <form>
                <div className="profilepic">
                    <img src="circle-user-solid.svg" className="round" id="image" alt="logo" />
                    <label className="form-label">Profile Picture</label>
                    <div className="input-group mb-3">
                        <input type="file" id="photo" name="photo" className="form-control" placeholder="Recipient's username"
                            aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange}/>
                        <button className="btn btn-outline-secondary" type="button" id="upld"
                            >Upload</button>
                    </div>

                    <form autocomplete="off" id="editProfile">
                        <div className="mb-3">
                            <label className="form-label">Name of the Institution</label>
                            <input type="text" className="form-control" id="heiname" name="heiname" placeholder="Enter your name" onChange={handleChange}/>
                        </div>

                        <div>
                            <label className="form-label">College Category</label>
                            <select className="form-select cat" id="Colcategory" required name="Colcategory" onChange={handleChange}
                                aria-label=".form-select-sm example">
                                <option value="select" selected disabled>Select</option>
                                <option value="uni">University</option>
                                <option value="deemed">Deemed University</option>
                                <option value="deemtobe">Deemed to be University</option>
                                <option value="aff">Affiliated</option>
                                <option value="auto">Autonomous</option>
                            </select>
                        </div><br/>

                        <div className="mb-3">
                            <label className="form-label">AICTE code</label>
                            <select className="form-select cat" id="aicte" name="aicte" placeholder="AICTE code" required onChange={handleChange}
                                aria-label=".form-select-sm example">
                                <option value="select" selected disabled>Select</option>
                                <option value="uni">1-4243471</option>
                                <option value="deemed">1-5931571</option>
                                <option value="deemtobe">1-434118461</option>
                                <option value="aff">1-7101687</option>
                                <option value="auto">1-462450421</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Year of Establishment</label>
                            <input type="date" className="form-control" id="year" name="year" placeholder="Year" onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">NBA Accreditation</label>
                            <select className="form-select cat" id="nba"  required name="nba" onChange={handleChange}
                                aria-label=".form-select-sm example">
                                <option value="select" selected disabled>Select</option>
                                <option value="Yes">yes</option>
                                <option value="No">no</option>
                                
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">NAAC Accreditation</label>
                            <select className="form-select cat" id="naac" name="naac"  required onChange={handleChange}
                                aria-label=".form-select-sm example">
                                <option value="select" selected disabled>Select</option>
                                <option value="Yes">yes</option>
                                <option value="No">no</option>
                                
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">NIRF Rank Band</label>
                            <select className="form-select cat" id="nirf" name="nirf"  required onChange={handleChange}
                                aria-label=".form-select-sm example">
                                <option value="select" selected disabled>Select</option>
                                <option value="to100">0-100</option>
                                <option value="between200">100-200</option>
                                <option value="above">Above 200</option>
                                <option value="norank">No Rank</option>
                                
                            </select>
                        </div>

                        <label htmlFor="basic-url" className="form-label">Portfolio</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Link</span>
                            <input type="url" className="form-control" id="link" name="link" aria-describedby="basic-addon3" onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Principal</label>
                            <input type="text" className="form-control" id="princi" name="princi" placeholder="Name" onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone No</label>
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone no" onChange={handleChange}/>
                        </div>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" name="state" required onChange={handleChange}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">District</label>
                                <input type="text" className="form-control" id="district" name="district" required onChange={handleChange}/>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Pincode</label>
                                <input type="text" className="form-control" id="pincode" name="pincode" required onChange={handleChange}/>
                            </div>
                        </div><br/>

                        <label htmlFor="basic-url" className="form-label">Social links</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">Link</span>
                            <input type="link" className="form-control" id="social" name="social" onChange={handleChange} aria-describedby="basic-addon3"/>
                        </div>

                        <label className="form-label" >Brochure</label>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" id="brochure" name="brochure" onChange={handleChange} aria-describedby="button-addon2"/>
                            <button className="btn btn-outline-secondary" type="button" id="upld" name="upld"
                                >Upload</button>
                        </div><br/>

                        <label className="form-label" id="declare">Declaration document</label>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" placeholder="Recipient's username" onChange={handleChange}
                                aria-label="Recipient's username" aria-describedby="button-addon2" id="decdoc" name="decdoc"/>
                            <button className="btn btn-outline-secondary" type="button" id="upld"
                                >Upload</button>
                        </div><br/>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" id="sub" onClick={uploadDetails} >Submit</button>
                        </div>

                    </form>

                </div>
            </form>
            </div>
    </div>
    </>
  )
}

export default Heiprofile
