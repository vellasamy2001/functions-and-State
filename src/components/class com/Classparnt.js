import React, { Component } from 'react'
import Child from './Classchild.js'

export class Classparnt extends Component {
  render() {
    const task =[ 
        { 
           "name":"Abhinav",
            "salary":75000
         },
       {
        "name":"Gaurav",
         "salary":62000
       },
      { 
       "name":"Raj",
        "salary":32000 
      }]

   
    return (
      <div>
        <h1>task class Component</h1>
        <Child sum={task}/>
      </div>
    )
  }
 }

export default Classparnt