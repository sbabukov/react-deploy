import React from 'react';
import profileimage from './img/profile-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Author: Stefan Babukov</h2>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nobis, vitae reprehenderit dolorum dolor unde provident officiis exercitationem eum cupiditate ipsa autem molestiae ab vero dicta. Quae, nihil? Qui, aperiam?
     </p>
     <img src={profileimage} alt="profile-image" />
    </div>
  );
}

export default App;
