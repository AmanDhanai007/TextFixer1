import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0D1117";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
     <div className="container my-3">

       <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
             />

     </div>
     </>
    // <Router>
    //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />

    //   <div className="container my-3">
    //     <Routes>
    //       {/* HOME PAGE */}
    //       <Route
    //         path="/"
    //         element={
    //           <TextForm
    //             heading="Enter the text to analyze below"
    //             mode={mode}
    //             showAlert={showAlert}
    //           />
    //         }
    //       />

    //       {/* ABOUT PAGE */}
    //       <Route path="/about" element={<About mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
