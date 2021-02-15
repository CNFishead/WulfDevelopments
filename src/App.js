import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar';
import Intro from './Components/Intro';
import BlogLink from './Components/BlogLink';

function App() {
  return (
    <div>
      <Nav/>
      <Intro/>    
      <BlogLink/>  
    </div>
  );
}

export default App;
