import React, { useState } from "react";
import { hot } from "react-hot-loader";
import './sass/app.scss';

const App = () => {
   const [state, setState] = useState({
      counter: 0
   })

   const onHandleClick = () => {
      setState((pre) => ({
         counter: pre.counter + 1
      }))
   }

   return (<div className="App">
      <h1>I'm configuring setting up Webpack!!!</h1>
      <p>{`The count now is: ${state.counter}`}</p>
      <button onClick={onHandleClick}>Click me</button>
   </div>)

}
export default hot(module)(App);