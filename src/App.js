import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Switch>
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/aboutMe" render={() => <About />} />
      <Route path="/WulfDevelopements" render={() => <Home />} />
    </Switch>
  );
}

export default App;
