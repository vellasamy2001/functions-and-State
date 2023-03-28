import React, { Component } from 'react'

export class Classchild extends Component {
  render(){
    var s=this.props.sum
    function gettask(a){
        let kind=s.filter((s)=>a>=s.salary);
        console.log(kind.map((g)=>g.name));
     }
     
    return s.map((value,index)=><h1 key={index}>
        {value.name} {value.salary}<br></br>
        <button onClick={()=>{gettask(s.salary)}}>click</button>
        </h1>)
 }
}

export default Classchild