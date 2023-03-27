import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/parent';
import Propparent from './components/props/prop-parent';
import Stparent from "./components/states/Stparent";
import Classparnt from "./components/class com/Classparnt"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
  {/* <Parent />  
  <Propparent/> */}
  <Stparent/>
  {/* <Classparnt/> */}
  </>
);



