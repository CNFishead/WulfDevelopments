import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar';
import Intro from './Components/Intro';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container-fluid App">
      <Nav/>
      {/* <BlogLink/> */}
      <Intro/>    
        
    </div>
  );
}

export default App;
