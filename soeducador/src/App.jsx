import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./assets/styles/main.scss";
import SectionHeader from "./assets/components/header/header";  
import HeaderTextSection from "./assets/components/headerTextSection/headerTextSection";
import ValidatorSection from "./assets/components/validatorSection/validatorSection";
import SectionFooter from "./assets/components/footer/footer";

function Verificacao() {
  return (
    <div>
      <SectionHeader />
      <HeaderTextSection />
      <ValidatorSection />
      <SectionFooter />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/verificacao" element={<Verificacao />} />

      <Route path="*" element={<Navigate to="/verificacao" replace />} />
    </Routes>
  );
}

export default App;
