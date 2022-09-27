import React from "react";
import "./App.css";
import Form from "./Components/Form";
import StudentsDetails from "./Components/StudentsDetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div id="form-holder">
      <Routes>
        <Route path="/" exact element={<Form />}></Route>
        <Route path="/studentdetails" element={<StudentsDetails />}></Route>
      </Routes>
    </div>
  );
};

export default App;
