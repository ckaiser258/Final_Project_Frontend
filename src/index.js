import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

export default function LoadingIndicator(props) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader type="Bars" color="#00BFFF" height="100" width="100" />
        </div>
  )
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
