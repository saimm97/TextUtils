import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, msgType) => {
    setAlert({ msg: message, type: msgType });
    setTimeout(() => setAlert(null), 1800);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "Success!");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(15 45 89)";
      showAlert("Dark Mode is enabled", "Success!");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          textAbout="About"
        />
        <Alert alert={alert} />
        <Routes>
        {/* <div className="container mx-auto"> */}
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text to Analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }>
          </Route>
          <Route exact path="/about" element={<Aboutus mode={mode}/>}></Route>
          {/* </div> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
