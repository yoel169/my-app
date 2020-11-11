import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MyForm from './components/Form.js';
import ReactMarkdown from 'react-markdown';

function MyButton(props){

  const arr = props.data;
  
  const buttons = arr.map((val,index)=>
    <button class={"navbutton"} id ={"bnav"+index}>{val}</button>
  );
  return buttons;   

}

const bs = ["Home", "Memes", "My Blog","Resume","Contact","About"];

const el = (
  <div>
    <MyForm  />
    <h1 id="title">Welcome to my website!</h1> 
    <div class="nav-group">
    <MyButton data = {bs}/>
    </div>

  </div>
);

ReactDOM.render(
  el, 
  document.getElementById('root')
);