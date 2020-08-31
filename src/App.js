import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import Body from "./components/Body/Body.component"
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="Body">
     <Body />
     </div>
    </div>
  );
}

export default App;
