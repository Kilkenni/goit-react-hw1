import React from "react";

import Profile from 'components/Profile';
import Statistics from "./Statistics";
import FriendList from "./FriendList";

import userJson from '../json/user.json';
import statData from '../json/data.json';
import friendsData from '../json/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      React homework #1: components

      <Profile
        username = {userJson.username}
        tag = {userJson.tag}
        location = {userJson.location}
        avatar={userJson.avatar}
        stats={userJson.stats}
      />
      
      <Statistics
        title="Some useful statistics!"  
        stats={statData}
      />

      <FriendList friends={ friendsData }/>
    </div>
  );
};
