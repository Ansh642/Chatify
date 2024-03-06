import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import WorkArea from "./components/WorkArea";
import CreateGroup from "./components/CreateGroup";

function App() {
  return (
    <div className="min-h-screen bg-richblack-50 flex items-center justify-center">

      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="app" element={<MainContainer/>}>
          <Route path="welcome" element={<Welcome/>}/>
          <Route path="chat" element={<WorkArea/>}/>
          <Route path="create-group" element={<CreateGroup/>}/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;


