import { ref,onValue } from 'firebase/database';
import React from 'react'
import {db} from './firebase-config'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
//import './Fadash.css'
import { Link} from "react-router-dom"

const handleClick= async(event) =>{
    console.log(event.currentTarget.id);
    console.log(event.currentTarget.name)
    localStorage.setItem('ProjectId',JSON.stringify(event.currentTarget.id))
    localStorage.setItem('ProjectPoster',event.currentTarget.name)

}
const Cardc= (props)=>(
    <section className="card col-6">

            <article className="card-head">
                
                <article className="card-deadline">
                    <span className="deadspan" ><p>{props.Deadline}</p></span>
                </article>
            </article>

            <article className="card-details">
                <article className="name">
                    <p className="heiname">University Grants Commision(UGC)</p>
                </article>
                <article className="prblm-statement">
                    <p className="prblmstmt"> {props.ProblemStatement}</p>
                </article>
                <article className="psid">
                    <p className="prblmid"><span className="pids">PID:</span> {props.PSID}</p>
                </article>
            </article>

            <article className="estimated">
                <article className="duration">
                    <p className="estm">Estimated Duration</p>
                    <p className="details">{props.Duration}</p>
                </article>
                <article className="budget">
                    <p className="estm">Estimated Budget</p>
                    <p className="details">{props.Budget}</p>
                </article>
                <Link to="/Projectview" id={props.PSID} name={props.key1} className="btn btn-primary" onClick={handleClick}>View Project</Link>
            </article>            
        </section>
)
export class HeiDash extends React.Component{
   
constructor(props) {
  super(props);
  this.state = {
     tableData:[],
     cardData:[]
  }
}

componentDidMount(){
    const dbRef= ref(db,'ProjectPosts/');

    onValue(dbRef, (snapshot)=>{
        let records=[];
        snapshot.forEach(csnap => {
            let keyName=csnap.key
            csnap.forEach(childSnapshot =>{
            let data = childSnapshot.val();
            records.push({"key":keyName,data});
        })
        });
        this.setState({tableData:records})
        this.setState({cardData:records})
        console.log(records)
    });
}

render() {
  return (
    <div className="container">
        <Card>
            {this.state.cardData.map((info, i)=>{
                return(
                    <Cardc 
                    key1={info.key}
                    PSID={info.data.PSID}
                    Budget={info.data.Budget}
                    Deadline={info.data.Deadline}
                    Duration={info.data.Duration}
                    ProblemStatement={info.data.ProblemStatement}
                    />
                )
            })}
        </Card>
    </div>
  )
}

}