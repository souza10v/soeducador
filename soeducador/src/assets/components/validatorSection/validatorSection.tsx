import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import "./styles.scss";
import CertificateDetails from "../certificadoDetails/certificadoDetails";

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
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(""); // Para armazenar a mensagem de erro
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        const cpfLimpo = data.cpf.replace(/[^\d]+/g, ""); // Remove pontos e traço do CPF

        try {
            const response = await fetch("/data/usuarios.json");
            const usuarios = await response.json();

            const usuarioEncontrado = usuarios.find(
                (usuario) => usuario.cpf === cpfLimpo && usuario.codigo === data.codigo
            );

            console.log(usuarioEncontrado);
            if (usuarioEncontrado) {
                setUserData(usuarioEncontrado);
                setErrorMessage("");
            } else {
                setUserData(null);
                setErrorMessage("Usuário não encontrado. Verifique o CPF e o código informados.");
            }
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
            setErrorMessage("Erro ao carregar os dados. Tente novamente mais tarde.");
        }
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

                    <button type="submit">Verificar Autenticidade</button>
                </form>

                {/* Exibindo o nome do usuário encontrado */}
                {userData && <CertificateDetails user={userData} />}

                {/* Exibindo a mensagem de erro do usuário não encontrado */}
                {errorMessage && <p className="user-error-message">{errorMessage}</p>}

                <p>
                    <a href="mailto:contato@soeducacao.com.br" className="support-link">
                        Enfrentando problemas? Fale com nosso suporte.
                    </a>
                </p>

            </div>

            <div className="img-content-validator">
                <img src="/certificados-ilustracao.webp" alt="Certificado Ilustração" />
            </div>
        </div>
    );
}

export default ValidatorSction;
