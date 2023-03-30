import './App.css';
import NavBar from './Components-custom/NavBar';
// import About  from './Components-custom/About';
import TestForm from './Components-custom/TestForm';

const name = "faizu";

function App() {
  return (
    <>
   <NavBar title="First-React-App"/>
  <div className="container my-3">
    <TestForm heading="Enter you text" main="To Analyze"/>
    {/* <About/> */}
    </div> 
    </>
    

  );
}

export default App;
