import React, { Component } from 'react'


export class Stateparent extends Component {
      constructor(props){
        super(props);
        let h=this.props.book;
        this.state={h}
      } 
  render() {
    let store=this.state.h;

    let letterasc=(sr)=>{ 
        console.log(store)
        let s=[...store].sort((a,b)=>{
     let letter=a.name.toUpperCase();
     let letter2=b.name.toUpperCase();
       if(letter < letter2){
        return -1
      }
       if(letter > letter2){
        return 1
      }
       return 0;
    })
    sr=='true'?this.setState({h:s}):this.setState({h:s.reverse()})
   
  }

      let purchase=()=>{
        let my=store.filter((e)=>e.isPurchased==true);
        this.setState({h:my});
       }

     let asc=()=>{
        let vel=store.sort((a,b)=> a.price - b.price);
        this.setState({h:vel})
    }

    let dsc=()=>{
        let vel=store.sort((a,b)=> a.price - b.price);
        this.setState({h:vel.reverse()})
    }
    return (
      <div>
          <button onClick={()=>letterasc("true")}> let asc click</button>
          <button onClick={()=>letterasc(false)}> let dsc click</button>
          <button onClick={()=>purchase()}> purc click</button>
          <button onClick={()=>asc()}> asc click</button>
          <button onClick={()=>dsc()}> dsc click</button>
          {store.map((v)=><h1>{v.name}</h1>)}
      </div>
    )
  }
}

export default Stateparent