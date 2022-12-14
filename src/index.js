import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
//
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore} from 'redux';
// import allReducers from './reducers';
// import {Provider} from 'react-redux';

// ----------------------------------------------------------------------

//STORE -> GLOBAL STATE

//ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

//REDUCER
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH 
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/TheTonicTech/"}>
        <App />  
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
