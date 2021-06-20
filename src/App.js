import React from 'react';
import profileimage from './img/profile-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Author: Stefan Babukov</h2>
     <img src={profileimage} alt="profile-image" />
    </div>
  );
}

export default App;
