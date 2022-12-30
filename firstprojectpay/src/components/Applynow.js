import React,{useState} from 'react'
import {db} from './firebase-config'
import { ref, set } from "firebase/database";

function Applynow() {
    const [inputList, setinputList]= useState([{category:'', amount:''}]);
    const [mileList,setmileList]= useState([{milestone:'',deliverables:'',budget:'',duration:''}])
    const [details,setDetails]=useState({
        psid:"",
        ps:'',
        Budget:'',
        Duration:''
    })

    const handleUpload=(e)=>{
       const records=[]
       const rec=[]
       var p,q;
        for(p=0;p<inputList.length;p++){
            records.push(inputList[p])
        }
        for(q=0;q<inputList.length;q++){
            rec.push(mileList[p])
        }
        console.log(records)
        set(ref(db, 'Proposals/' +"Applications"), {
            ProblemStatement: details.ps,
            PSID: details.psid,
            Budget:details.Budget,
            Duration:details.Duration,            
            BudgetDesc:records,           
            MilestoneDesc:rec
        }).then(()=>{
            alert("data stored successfully")
          });

    }

    const handleInput = (e) =>{
        const name1= e.target.name;
        const value1 = e.target.value;
        setDetails((prev) => {
            return{...prev, [name1]: value1 }
        })
    }
    const handleChange=(e,index)=>{
        const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    console.log(inputList)
    console.log(index)
    }

    const handleAdd=()=>{
        setinputList([...inputList, { Category:'', Amount:''}]);
    }

    const handlemileChange=(event,index)=>{
        const {name, value}= event.target;
        const miles=[...mileList];
        miles[index][name]=value
        setmileList(miles)
        console.log(mileList)
        console.log(event.target.name)
        console.log(event.target.id)

    }
    const handleAddrow=()=>{
        setmileList([...mileList,{MilestoneName:'',Deliverables:'',Budget:'',SubmissionDate:''}])
    }

  return (
   <>
   <div className="container">
    <h1>Apply Now</h1>
    <form>
   <div className="mb-3">
        <label className="form-label">PSID</label>
        <input type="text" className="form-control"  id="psid" name="psid" placeholder="PSID" onChange={handleInput} />
    </div>
    <div className="mb-3">
        <label className="form-label">Problem statement</label>
        <input type="text" className="form-control" id="ps" name="ps" placeholder="Problem Statement" onChange={handleInput}/>
     </div>
     <div className="mb-3">
        <label className="form-label">Expected Budget</label>
        <input type="text" className="form-control" id="Budget" name="Budget" placeholder="Budget" onChange={handleInput} />
    </div>

    <div className="mb-3">
        <label className="form-label">Expected Duration</label>
        <input type="text" className="form-control" id="Duration" name="Duration"   placeholder="Duration" onChange={handleInput}/>
    </div>
    <table>
        <thead>
        <tr>
            <td>Budget Section</td>
                
        </tr>
        </thead>
        <tbody> 
        <tr>   
            {  
            inputList.map(  (x,i)=>{ 
                return(  
                <div>
               <td><input type="text" id="category" name="Category" placeholder="Enter the category" onChange={e=>handleChange(e,i)}/>  </td>
                <td><input type="number" id="amount" name="Amount" placeholder="Enter the amount" onChange={e=>handleChange(e,i)}  /></td>   
                </div>
            ); } ) } 
              </tr>          
        </tbody>
    </table>
    <button type="button" onClick={handleAdd}>Add</button>

    <div className='my-3'>
    <table>
        <thead>
        <th>Milestone description and submission date</th>
        </thead>
        <tbody>       
           <tr> 
            { 
            mileList.map((x,i)=>{
                return(
            <div>      
           <td><input type="text" id="a" name="MilestoneName" placeholder="Milestone name" onChange={event=>handlemileChange(event,i)}/>  </td>
           <td><input type="text" id="b" name="Deliverables" placeholder="Deliverables" onChange={event=>handlemileChange(event,i)}/>  </td>
           <td><input type="number" id="c" name="Budget" placeholder="Budget" onChange={event=>handlemileChange(event,i)}/>  </td>
            <td><input type="date" id="d" name="SubmissionDate" onChange={event=>handlemileChange(event,i)}/></td>   
            </div>
          ) }) }  
           </tr>          
        </tbody>
    </table>
    <button type="button" onClick={handleAddrow}>Add row</button>
    </div>    
    <button className="btn btn-primary me-3" type="button" onClick={handleUpload}>Submit</button>
    </form>
   </div>
   </>
  )
}

export default Applynow
// if needed i can write 6 separate functions that can handle the input changes but i want to use it with the same useState and there is some spread syntax used over there so i want to know how to use it