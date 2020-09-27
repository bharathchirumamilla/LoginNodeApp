import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./resources/store";
import App from './app';

render(
 <App />
  document.getElementById("root")
);



// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
// import App from './app'

//ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById('root'))
