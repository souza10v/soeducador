import "./styles.scss";
import { useState } from "react";

function SectionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="logo-img">
        <img src="/logo.webp"></img>
      </div>
      <div className="menu-info">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`sub-menus ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>Certificados</li>
            <li>e-MEC</li>
            <li>Cursos Online</li>
            <li>Pós Graduação</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
