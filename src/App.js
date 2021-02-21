import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container-fluid App">
      <Header/>
      <Intro/>    
      <Footer/>
    </div>
  );
}

export default App;
