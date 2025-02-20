import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.scss";

function InformationPage() {
  const location = useLocation();
  const { cpf } = location.state || {}; // Acessa o CPF passado no estado
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Simula o fetch do usuário baseado no CPF
    if (cpf) {
        // Remover pontos e hífens do CPF
        const cpfLimpo = cpf.replace(/[^\d]+/g, '');

        console.log(cpfLimpo)
      
        fetch(`/data/${cpfLimpo}.json`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Usuário não encontrado');
            }
            return response.json();
          })
          .then((data) => {
            setUsuario(data); // Supondo que o JSON tenha os dados do usuário
          })
          .catch((error) => {
            console.error("Erro ao buscar os dados:", error);
          });
      }
      
      
  }, [cpf]);

  if (!cpf) {
    return <div>Erro: CPF não fornecido!</div>;
  }

return (
    <div className="container-information">
        <h1>Dados do Usuário</h1>
        {usuario ? (
            <div>
                <p><strong>Nome:</strong> {(usuario as { nome: string, cpf: string }).nome}</p>
                <p><strong>CPF:</strong> {(usuario as { nome: string, cpf: string }).cpf}</p>
                {/* Outros dados do usuário */}
            </div>
        ) : (
            <p>Carregando dados...</p>
        )}
    </div>
);
}

export default InformationPage;
