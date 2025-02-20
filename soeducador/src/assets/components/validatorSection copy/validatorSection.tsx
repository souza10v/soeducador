import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate
import "./styles.scss";

const validarCPF = (value) => {
  const cpf = value.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }
  return true;
};

const schema = yup.object().shape({
  codigo: yup.string().required("O código é obrigatório."),
  cpf: yup
    .string()
    .required("O CPF é obrigatório.")
    .test("valid-cpf", "CPF inválido", (value) => validarCPF(value)),
  solicitante: yup.string().required("Selecione quem está solicitando."),
});

function ValidatorSction() {
  const [userName, setUserName] = useState("");  // Para armazenar o nome do usuário encontrado
  const [errorMessage, setErrorMessage] = useState(""); // Para armazenar a mensagem de erro
  const navigate = useNavigate();  // Inicializando o hook de navegação

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { cpf, codigo } = data;
    
    // Fazendo a requisição para carregar o JSON
    const response = await fetch("/data/usuarios.json");
    const usuarios = await response.json();

    // Buscando usuário baseado no CPF e código
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.cpf === cpf && usuario.codigo === codigo
    );

    if (usuarioEncontrado) {
      setUserName(usuarioEncontrado.nome);
      setErrorMessage(""); // Limpa a mensagem de erro se o usuário for encontrado
      // Redireciona para a página de destino com o CPF como estado
      navigate("/pagina-destino", { state: { cpf: usuarioEncontrado.cpf } });
    } else {
      setUserName(""); // Limpa o nome do usuário
      setErrorMessage("Usuário não encontrado. Verifique o CPF e o código informados."); // Exibe mensagem de erro
    }

    console.log("Dados enviados:", data);
  };

  return (
    <div className="container-validator">
      <div className="form-content-validator">
        <h2>Código do Certificado</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Informe o código de autenticidade:</label>
          <input type="text" {...register("codigo")} placeholder="Digite o código" />
          {errors.codigo && <p className="error-message">{errors.codigo.message}</p>}

          <label>CPF do aluno:</label>
          <InputMask
            mask="999.999.999-99"
            {...register("cpf")}
            placeholder="Digite o CPF"
          />
          {errors.cpf && <p className="error-message">{errors.cpf.message}</p>}

          <label>Quem está solicitando a autenticação?</label>
          <select {...register("solicitante")}>
            <option value="">Selecione</option>
            <option value="aluno">Aluno</option>
            <option value="cartorio">Cartório</option>
            <option value="departamento_publico">Departamento Público</option>
            <option value="instituicao_privada">Instituição Privada</option>
          </select>
          {errors.solicitante && <p className="error-message">{errors.solicitante.message}</p>}

          <button type="submit">Enviar</button>
        </form>

        {/* Exibindo o nome do usuário encontrado */}
        {userName && <p>Nome do usuário: {userName}</p>}

        {/* Exibindo a mensagem de erro do usuário não encontrado */}
        {errorMessage && <p className="user-error-message">{errorMessage}</p>}
      </div>

      <div className="img-content-validator">
        <img src="/certificados-ilustracao.webp" alt="Certificado Ilustração" />
      </div>
    </div>
  );
}

export default ValidatorSction;
