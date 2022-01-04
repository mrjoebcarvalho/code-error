import React from "react";
import "./style.css";
import Home from "./Components/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

 function App() {
  return (
    <div className= "app">
      <Router>
        <Switch>
          <Route path="./search">
            <h1>sdahluskhglkusrghkasugh usa</h1>
           </Route> 
           <Route path="/">
            <Home/>
           </Route>   
    
     </Switch>
     </Router>

    </div>
  );
}
export default App