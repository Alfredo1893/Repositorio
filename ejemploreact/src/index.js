import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './Components/contador'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Contador titulo={"Hola Mundo"}/>
  </div>
);


