import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from 'components/App';
import Profile from 'components/Profile';
import reportWebVitals from './reportWebVitals';
import './index.css';
import userJson from './json/user.json';

ReactDOM.render(
  <React.StrictMode>
    <Profile
      username = {userJson.username}
      tag = {userJson.tag}
      location = {userJson.location}
      avatar={userJson.avatar}
      stats={userJson.stats}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
