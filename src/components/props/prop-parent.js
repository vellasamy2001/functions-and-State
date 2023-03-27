import React from 'react'
import Child from "./prop-child.js"

const Propparent = () => {
    const tasks =[
        {
            'name':'Write for Evato tuts',
        'duration':120
    },
    {
        'name':'Work Out',
    'duration':60
   },
   {
    'name':'Procrastinate on Dulingo',
    'duration':240
}];

var kind=(a,b)=>{
    console.log(a,b)
    let swim=tasks.filter((value,index)=>{
        return a.duration <= value.duration ;  
    })
    console.log(swim);
}
  return (
    <div>prop-parent

       <Child sum={tasks} pass={kind}/>
    </div>

  )

}
export default Propparent