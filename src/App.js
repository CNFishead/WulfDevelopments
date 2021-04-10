import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import { Route, Switch } from "react-router-dom";



import "./App.css";


function App() {
  return (
    <Switch>
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/aboutMe" render={() => <About />} />
      <Route path="/WulfDevelopments" render={() => <Home />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  );
}

export default App;
