import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
// eslint-disable-next-line
import './style.css';
import 'tachyons';

const App = ()=>{
  return(
    <div>
    <Hello />
    </div>
  )
}

render(<App />, document.getElementById('root'));
