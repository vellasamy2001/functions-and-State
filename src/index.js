import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/parent';
import Propparent from './components/props-fcn/prop-parent';
import Stparent from "./components/states/Stparent";
import Classparnt from "./components/class com/Classparnt"
import Stateparent from './components/class com/Stateparent';

const root = ReactDOM.createRoot(document.getElementById('root'));
let  books = [
  { name:"You Are Born to Blossom",
  year : 2011,
  },
  { 
  name:"Spirit of India",
  year :2013,
  },
  { name:" Governance for Growth in India",
  year : 2014,
  },
  { name:"The Family and the Nation",
  year :2015
  },
  { name:"  Mission of India",
  year :2005
  },
  { name:"Wings of fire",
  year : 1999
  },
  { name: "You are Unique:",
  year :2012
  }
  ]

root.render(
  <>
   
  {/* <Parent />  
  <Propparent/> */}
  {/* <Stparent/> */}
  {/* <Classparnt/> */}
  <Stateparent books={books}/>
  </>
);



