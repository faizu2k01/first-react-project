import { useState } from "react";
import "./App.css";
import Alert from "./Components-custom/Alert";
import NavBar from "./Components-custom/NavBar";
import About from "./Components-custom/About";
import TestForm from "./Components-custom/TestForm";

import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./Components-custom/Error";

function App() {
  const [mode, setMode] = useState("#F7EFE5");
  const [alert, setAlert] = useState(null);

  var showAlart = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleModeSetter = (color) => {
    switch (color) {
      case "green":
        setMode("#04C175");
        showAlart("Green Background Set", "success");
        document.body.style.backgroundColor = "#05EC8F";
        break;
      case "pink":
        setMode("#37C2FA");
        showAlart("Pink Background Set", "success");
        document.body.style.backgroundColor = "#4CE6A8";
        break;
      case "yellow":
        setMode("#37FA69");
        showAlart("Yellow Background Set", "success");
        document.body.style.backgroundColor = "#37FACD";
        break;
      case "blue":
        setMode("#3899D4");
        showAlart("Blue Background Set", "success");
        document.body.style.backgroundColor = "#EEEEEE";
        break;
      default:
        setMode("#191825");
        showAlart("Default color set", "success");
        document.body.style.backgroundColor = "#E384FF";
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title="Editor"
          mode={mode}
          toggleModeSetter={toggleModeSetter}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} errorElement={<ErrorPage/>}></Route>
            <Route
             exact path="/" 
               element={ 
                <TestForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlart={showAlart}
                />
              }
               errorElement={<ErrorPage/>}
             ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
