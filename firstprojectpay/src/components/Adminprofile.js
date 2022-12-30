import React from 'react'

function Adminprofile() {
  return (
    <>
    <div className="mainbx">
        <h2>Admin Profile</h2>
        <div className="contentbx">

            <div className="profilepic">
                <img src="circle-user-solid.svg" className="round" id="image" alt="logo"/>
                <label for="formGroupExampleInput" className="form-label">Profile Picture</label>
                <div className="input-group mb-3">
                    <input type="file" id="photo" className="form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button"  id="upld"
                        onclick="uploadImage()">Upload</button>
                </div>
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Employee Id</label>
                <input type="text" className="form-control" id="eid" placeholder="Enter your Employee ID"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Phone no</label>
                <input type="tel" className="form-control" id="number" placeholder="Enter your phone no"/>
            </div>

            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Department</label>
                <input type="text" className="form-control" id="dep" placeholder="Enter your department"/>
            </div>

            <div>
                <label for="formGroupExampleInput" className="form-label">Gender</label>
                <select className="form-select" id="gender" aria-label=".form-select-sm example">
                    <option value="select" selected disabled>Select one</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="notsay">Prefer not say</option>
                </select>
            </div><br/>

           
            <label for="formGroupExampleInput" className="form-label" id="idcard">ID card</label>
            <div className="input-group mb-3">
                <input type="file" className="form-control" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="upld"
                    onclick="uploadImage()">Upload</button>
            </div>

            <label for="formGroupExampleInput" className="form-label" id="doc">Document proof</label>
            <div className="input-group mb-3">
                <input type="file" className="form-control" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="upld" onclick="uploadFile()">Upload</button>
            </div>

            <label for="formGroupExampleInput" className="form-label" id="declare">Declaration document</label>
            <div className="input-group mb-3">
                <input type="file" className="form-control" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="upld" onclick="uploadFile()">Upload</button>
            </div><br/>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" id="insBtn" onclick="updateADProfile()">Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Adminprofile
