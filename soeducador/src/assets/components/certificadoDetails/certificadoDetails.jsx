import React from "react";
import "./styles.scss"; // Arquivo para estilos, se necessário.

const CertificateDetails = ({ user }) => {
  if (!user) return null;

  return (
    <div className="certificate-details">
      <h2>CERTIFICADO RECONHECIDO</h2>
      <p><strong>Aluno(a):</strong> {user.nome}</p>
      <p><strong>Curso:</strong> {user.curso}</p>
      <p><strong>Nota de aprovação:</strong> {user.nota}</p>
      <p>
        <strong>Cópia do certificado:</strong> 
        <a 
          href={`/data/${user.certificado}.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          download
        >
          Baixar Cópia
        </a>
      </p>
      <p><strong>Registro eletrônico:</strong> {user.registro}</p>
      <p>Certificado emitido em conformidade com as leis e diretrizes Brasileiras de Educação a Distância, Decreto Federal nº 5.154/2</p>
    </div>
  );
  
  
};

export default CertificateDetails;
