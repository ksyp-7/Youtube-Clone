import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Slidebar from './Slidebar';
import Recomand from './Recomand'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="app_page">
      <Slidebar />
      <Recomand />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
