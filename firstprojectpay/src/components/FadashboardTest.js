import { ref,onValue } from 'firebase/database';
import React from 'react'
import {db} from './firebase-config'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'

export class Fadash extends React.Component{
constructor(props) {
  super(props);
  this.state = {
     tableData:[]
  }
}

componentDidMount(){
    const dbRef= ref(db,'ProjectPosts/');

    onValue(dbRef, (snapshot)=>{
        let records=[];
        snapshot.forEach(csnap => {
            csnap.forEach(childSnapshot =>{
            let keyName = childSnapshot.key;
            let data = childSnapshot.val();
            records.push({"key":keyName, "data":data});
        })
        });
        this.setState({tableData:records})
    });
}

render() {
  return (
    <div className="container">
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Deliverables</th>
                    <th>Duration</th>
                    <th>Eligiblity</th>
                    <th>PSID</th>
                    <th>ProblemStatement</th>
                    <th>PsDescription</th>
                </tr>
            </thead>
            <tbody>
                {this.state.tableData.map((row, index)=>{
                  return(
                    <tr>
                        <td>{index}</td>                        
                        <td>{row.data.Budget}</td>
                        <td>{row.data.Deadline}</td>
                        <td>{row.data.Deliverables}</td>
                        <td>{row.data.Duration}</td>
                        <td>{row.data.Eligibility}</td>
                        <td>{row.data.PSID}</td>
                        <td>{row.data.ProblemStatement}</td>
                        <td>{row.data.PsDescription}</td>
                    </tr>
                )
                })}
            </tbody>
        </Table>
    </div>
  )
}

}