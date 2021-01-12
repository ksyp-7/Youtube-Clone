import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.jsx';
import reportWebVitals from './reportWebVitals';
import Slidebar from './Slidebar.jsx';
import Recomand from './Recomand.jsx';
import SearchPage from './SearchPage.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
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
    </React.Fragment>,
  /*<Header />
  */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
