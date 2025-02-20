import React from "react";
import "./assets/styles/main.scss";
import SectionHeader from "./assets/components/header/header";  
import HeaderTextSection from "./assets/components/headerTextSection/headerTextSection"
import ValidatorSction from "./assets/components/validatorSection/validatorSection"
import SectionFooter from "./assets/components/footer/footer";

function App() {
  return (
    <div>
      <SectionHeader />  
      <HeaderTextSection/>
      <ValidatorSction/>

      <SectionFooter/>
    </div>
  );
}

export default App;
