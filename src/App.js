import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import FarmerRoutes from "./components/routes/Index";
function App() {
  return (
    <div className="App">
      <Router>
        <FarmerRoutes />
      </Router>
    </div>
  );
}

export default App;
