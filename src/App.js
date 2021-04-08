import Home from "./screens/Home";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Switch>
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/skills" render={() => <Skills />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
}

export default App;
