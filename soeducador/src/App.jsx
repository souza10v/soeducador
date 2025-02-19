import React from "react";
import "./assets/styles/main.scss";
import SectionHeader from "./assets/components/header/header";  

function App() {
  return (
    <div>
      <SectionHeader />  
      <h1>Hello, worwld!</h1>
      <button className="btn">Click me!</button>
    </div>
  );
}

export default App;
