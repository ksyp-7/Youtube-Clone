import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Slidebar from './Slidebar';
import Recomand from './Recomand';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
        <div className="app_page">
            <Slidebar />
            <SearchPage />
        </div>
        </Route>
        <Route path="/">
          <div className="app_page">
            <Slidebar />
             <Recomand />
          </div>

        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  /*<Header />
  */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
