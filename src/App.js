import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";

//Import the Route component
import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>

      <Switch>
        <Route path="/" />
        <Route path="/jeopardy" component={Jeopardy} />
      </Switch>
    </div>
  );
}

export default App;
