import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js'

const el = (
  <div>
    <Main />
  </div>
);

ReactDOM.render(
  el, 
  document.getElementById('root')
);