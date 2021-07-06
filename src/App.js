import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather defaultCity="Essen" />
    
      <footer>
        <a href="https://github.com/CintaChan86/Vanilla-Weather-App"> Coded </a> by Yacinta Hostiningtyas
      </footer>
      </div>
    </div>
  );
}