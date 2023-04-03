
import React, { useState } from 'react'

const Form = () => {
    const [firstInp, setFirstInp] = useState("");
    const [secondInp, setSecondInp] = useState("");
    const [inputEmpty, setInputEmpty] = useState(false);
    const [checkInp,checkEmpty]= useState(false);
    
    const handleInput = (e) => {
       if(e.target.name == "first"){
          setFirstInp(e.target.value);
       }
       else{
        setSecondInp(e.target.value);
       }
    }

    const checked=(e)=>{
      if(e.target.check == false){
        checkEmpty(false);
      }
      else{
        checkEmpty(true);
      }
    }

    const handleSubmit = (e) => {
       e.preventDefault();

       setInputEmpty(true);

       let a =[{
        name:firstInp,
        description:secondInp,
        isComplete:checkInp,
       }];

      a.forEach((values) => {
        console.log(values.name, values.description, values.isComplete);
      })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input name='first' onChange={handleInput}></input>
            {firstInp == "" && inputEmpty && <div>Please Fill the first box</div>}

          <input name='second' onChange={handleInput}></input>
            {secondInp == "" && inputEmpty && <div>Please Fill the second box</div>}

          <input name ="check" onChange={checked} type="checkbox"></input>
          <input type='submit' ></input>
        </form>
    </div>
  )
}

export default Form