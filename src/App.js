import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import Body from "./components/Body/Body.component"
import StartBody from "./components/StartBody/StartBody.component"
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Switch>
    
       <Route exact path="/" component={StartBody}/>
     
     <div className="Body">
      <Route exact path="/Body" component={Body}/>
      </div>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
