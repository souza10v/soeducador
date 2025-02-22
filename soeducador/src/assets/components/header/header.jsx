import "./styles.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SectionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegação interna

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="container-content">
        {/* LOGO - Navega para /validacao */}
        <div className={`logo-img ${isMenuOpen ? "hidden-mobile" : ""}`} onClick={() => navigate("/verificacao")} style={{ cursor: "pointer" }}>
          <img src="/logo.webp" alt="Logo" />
        </div>


        <div className="menu-info">
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div className={`sub-menus ${isMenuOpen ? "active" : ""}`}>
            <ul>
              {/* Links Externos - Redirecionam com window.location.href */}
              <li onClick={() => window.location.href = "/"}>Certificados</li>
              <li onClick={() => window.location.href = "https://soeducador.com.br/parceria-mec"}>e-MEC</li>
              <li onClick={() => window.location.href = "https://soeducador.com.br/cursos"}>Cursos Online</li>
              <li onClick={() => window.location.href = "https://soeducador.com.br/cursos/pos-graduacoes"}>Pós Graduação</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
