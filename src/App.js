import React, { useState } from "react";
import "./App.css";
import Navbar from "./myComponent/Navbar";
import TextForm from "./myComponent/TextForm";
// import About from "./myComponent/About";
import Alert from "./myComponent/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {  
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0341";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils - Toggling...";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils -  Again Toggling...";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below..." mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
