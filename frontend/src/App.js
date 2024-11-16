import React from "react";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App" >
      <ToastContainer />
      <HomePage />
    </div>
  );
};

export default App;
