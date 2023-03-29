import './App.css';
import NavBar from './Components-custom/NavBar';
import TestForm from './Components-custom/TestForm';

const name = "faizu";

function App() {
  return (
    <>
   <NavBar title="First-React-App"/>
  <div className="container my-3"><TestForm heading="Enter you text" main="To Analyze"/></div> 
    </>
    

  );
}

export default App;
