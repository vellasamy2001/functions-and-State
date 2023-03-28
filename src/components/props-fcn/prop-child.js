import React from 'react'

const Propchild = (props) => {
    let result=props.sum;
    console.log(result);

  return (
    <div>
        {result.map((value,index)=>{
            return <div key={index}>

                <p>{value.name}</p>
                <h1>{value.duration}</h1>
                <button onClick={()=>props.pass(value,index)}>Submit</button>
            </div>

        })}
    </div>
  )
}

export default Propchild