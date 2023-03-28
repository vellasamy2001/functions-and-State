import React, { Component } from 'react'


export class Stateparent extends Component {
      constructor(props){
        super(props);
        let h=this.props.books;
        this.state={h}
      } 
  render() {
    let y=this.state.h;
     let siva=()=>{
        let vel=y.filter((value)=> 2014 >= value.year);
        this.setState({h:vel})
    }
    return (
      <div>
          <button onClick={()=>siva()}> click me</button>
          {y.map((v)=><h1>{v.name}</h1>)}
      </div>
    )
  }
}

export default Stateparent