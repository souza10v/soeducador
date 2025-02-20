import React from "react";
import "./assets/styles/main.scss";
import SectionHeader from "./assets/components/header/header";  
import HeaderTextSection from "./assets/components/headerTextSection/headerTextSection"
import ValidatorSction from "./assets/components/validatorSection/validatorSection"

function App() {
  return (
    <div>
      <SectionHeader />  
      <HeaderTextSection/>
      <ValidatorSction/>
    </div>
  );
}

export default App;
