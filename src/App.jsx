
import React, { useState } from "react";
import { Router } from "react-router-dom";
import {Home} from "./Home.jsx";
import { dashboard } from "./Dashboard.jsx";



export function App() {
return (
  <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
)




}

export default App; 

