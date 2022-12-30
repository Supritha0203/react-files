import { ref,onValue } from 'firebase/database';
import React from 'react'
import {db} from './firebase-config'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {Card} from 'react-bootstrap'
//import './Fadash.css'
//import { Link} from "react-router-dom"
// at present the apply now button has no functionality, we should see whether it gets the data directly from the database or it should be done manually
const Cardc= (props)=>(
    <div >              
                    <h1>{props.Deadline}</h1> <br/>               
                    <p >{props.ProblemStatement}</p> <br/>               
                    <p >{props.PSID}</p>  <br/>                           
                    <p >{props.Duration}</p>   <br/>           
                    <p >{props.Budget}</p> <br/>                
                    <p >{props.Deliverables}</p>   <br/>              
                    <p >{props.Eligibility}</p> <br/>               
                    <p>{props.PsDescription}</p> 
                    <button type='button' className='btn btn-primary'>Apply now</button>                      
    </div>
)
let records=[]
export class Viewproject extends React.Component{
   
    constructor(props) {
      super(props);
      this.state = {
         pageData:[]
         
      }
    }
    componentDidMount(){
        const poster= localStorage.getItem('ProjectPoster')
        const psid= localStorage.getItem('ProjectId')
        const dbRef= ref(db,'ProjectPosts/'+ poster+'/'+ psid );
        
      
            onValue(dbRef,(snapshot)=>{
                let data=snapshot.val()
                console.log(data)
                records.push({data});
                console.log(records)

                this.setState({pageData:records})

        });
        
        console.log(records)
    }
    render(){
        return(
            <div className='container my-3'>
             
            {this.state.pageData.map((info, i)=>{
                return(
                    <Cardc 
                    key1={info.key}
                    PSID={info.data.PSID}
                    Budget={info.data.Budget}
                    Deadline={info.data.Deadline}
                    Duration={info.data.Duration}
                    ProblemStatement={info.data.ProblemStatement}
                    PsDescription={info.data.PsDescription}
                    Eligibility={info.data.Eligibility}
                    Deliverables={info.data.Deliverables}
                    />
                    
                )
            })}             
            </div>
        )
    }
}
