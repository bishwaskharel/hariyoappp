import React from 'react';
import Navbar from "./components/Navbar/Navbar.component"
import Body from "./components/Body/Body.component"
import StartBody from "./components/StartBody/StartBody.component"
import SignInForm from "./components/SignInForm/SignInForm.component"
import Admin from "./components/Admin/Admin.component"
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Navbar />
    <Switch>
    
       <Route exact path="/" component={StartBody}/>
     
     <div className="Body">
      <Route exact path="/Body" component={Body}/>
      <Route exact path="/SignInForm" component={SignInForm}/>
      <Route exact path="/Admin" component={Admin}/>
      </div>
      
    </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
