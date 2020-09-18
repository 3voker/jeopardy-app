import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

import Jeopardy from "./components/jeopardy/Jeopardy";

//Import the Route component
//Import the Route component
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" />
        <Route path="/jeopardy" component={Jeopardy} />
      </Switch>
    </div>
  );
}

export default App;
