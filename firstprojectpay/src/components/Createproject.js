import React, {useState} from 'react'
import {db} from './firebase-config'
import { ref, set } from "firebase/database";

function Createproject() {
    const [details,setDetails] = useState({
        psid:"",
        ps:"",
        desc:"",
        budget:"",
        duration:"",
        deadline:"",
        eligibility:"",
        deliver:""
    })
    const handleChange = (e) =>{
        const name1= e.target.name;
        const value1 = e.target.value;
        setDetails((prev) => {
            return{...prev, [name1]: value1 }
        })
    }

    const uploadPost = (e) =>{
        const Psid=JSON.stringify(details.psid)
        const userid= localStorage.getItem('userID')
        set(ref(db, 'ProjectPosts/'  + userid +"/" + Psid), {
            ProblemStatement: details.ps,
            PSID: details.psid,
            PsDescription:details.desc,
            Budget:details.budget,
            Deadline:details.deadline,
            Duration:details.duration,
            Eligibility:details.eligibility,
            Deliverables:details.deliver
        }).then(()=>{
            alert("data stored successfully")
          });

    }
  return (
   <>
    <div className="mainbx signup">
    <h1>Create Post</h1>
        <div className="contentbx">
            <div className="formbx">
                <form>

                    <div className="mb-3">
                        <label className="form-label">PSID</label>
                        <input type="text" className="form-control" id="psid" name="psid" placeholder="PSID" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Problem statement</label>
                        <input type="text" className="form-control" id="ps" name="ps" placeholder="Problem Statement" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea cols="40" className="form-control" id="desc" name="desc" rows="3" onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Budget</label>
                        <input type="text" className="form-control" id="budget" name="budget" placeholder="Budget" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Duration</label>
                        <input type="text" className="form-control" id="duration" name="duration" placeholder="Duration" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Deadline to apply</label>
                        <input type="date" className="form-control" id="deadline" name="deadline" placeholder="Date" onChange={handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Eligibility</label>
                        <textarea cols="40" className="form-control" id="eligibility" name="eligibility" rows="3" onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Deliverables</label>
                        <textarea cols="40" className="form-control" id="deliver" name="deliver" rows="3" onChange={handleChange}></textarea>
                    </div>

                    <label className="form-label" id="declare">Document</label>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="doc"
                            >Upload</button>
                    </div><br/>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" id="post" onClick={uploadPost} >Post</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
   </>
  )
}

export default Createproject
