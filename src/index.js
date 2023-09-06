// Import area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Message from './Message'
import reportWebVitals from './reportWebVitals';


// Creating Functional Component



function Student(){
  return <>
          <p>For a just transition from coal to renewable energy, India should start addressing its historical wrongs and give to the displaced what they are owed.</p>
          <Message/>
        </>
}

function App(){
  // function always return somthing.
  // A Functional Component always return JSX(Javascript and XML) structure.

  return  <>
          <div>
          <h1>When coal mines close, give land back to original owners.
          <Student />
          </h1>
          
          </div>
          </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
