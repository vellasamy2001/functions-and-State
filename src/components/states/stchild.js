import React from 'react'


const Stchild = (props) => {
    let receive=props.pas;
    console.log(receive);
    
  return (
    <div>
        {receive.map((value,index)=>{
            return <div key={index}>
                <p>{value.id}</p>
                <h1>{value.name}</h1>
                <h4>{value.salary}</h4>
                
                <button onClick={()=>props.pas2(value,index)}>Submit</button>
            </div>
        })}
    </div>
  )
}

export default Stchild