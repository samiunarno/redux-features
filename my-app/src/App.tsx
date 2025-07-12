// src/App.tsx
// import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/layout/navbar"; // Adjust the path if necessary

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      {/* Add your routes or main content here */}
    </div>
  );
}

export default App;
