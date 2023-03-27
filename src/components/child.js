import React from 'react'

const child = (props) => {
    let result= props.Year;
    console.log(result);
  return (
    <div>
        {/* <button onClick={() => a.filter(function(b){
            if(b.year < 2010){
                console.log(b.name);
            }
        })}>Click Here</button> */}
    {result.map((value,index)=>{
         return <div key={index}>
            <h1>{value.name}</h1>
            <h2>{value.year}</h2>
     <button onClick={()=>props.pass(value,index)}>Click Me</button>
      </div>
     })
       }

        </div>
  )
}

export default child