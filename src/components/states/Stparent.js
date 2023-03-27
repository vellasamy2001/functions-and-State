import React, { useState } from 'react'
import Child from "./stchild.js"

const Stparent = () => {
    let employees = [ 
        { 
          "id": 11,
           "name":"Abhinav",
            "salary":75000
         },
     {
       "id": 2131,
        "name":"Gaurav",
         "salary":62000
       },
     { 
      "id": 3012,
       "name":"Raj",
        "salary":32000 
    }]

    const[mobile,setApple]=useState(employees)

     var kind=()=>{
       
        let swim=employees.filter((value)=>{
            return value.salary > 60000  ;
           
        })

      setApple(swim);
    }
    var name=(a,b)=>{
         let sky=employees.filter((value,index)=>{
            return a.salary <= value.salary;
         })
         console.log(sky);
    }

    var vel=()=>{
      let s=[ 
        { 
          "id": 11,
           "name":"siva",
            "salary":75000
         },
     {
       "id": 2131,
        "name":"vell",
         "salary":62000
       },
     { 
      "id": 3012,
       "name":"samy",
        "salary":32000 
    }]
    setApple(s)
    }

  return (
    <div><button onClick={()=>vel()}> click</button>
   <button onClick={()=>kind()}> click</button>
      {mobile.map((value,index)=>
      <>
         <h1> {value.name}</h1>
         <h2> {value.salary}</h2>
         </>
  )}
    <Child pas={employees} pas2={name} />

    </div>
  )
}

export default Stparent