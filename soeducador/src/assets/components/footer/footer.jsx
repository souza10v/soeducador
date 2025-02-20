import "./styles.scss";
import { useState } from "react";

function SectionFooter() {
    return (
        <div className="container-footer">
            <div className="section-1-footer">
                <div className="items-footer">
                    <div className="items-footer-1">
                        <h2>Para Você</h2>
                        <ul>
                            <li><a href="#">Blog do SóEducador</a></li>
                            <li><a href="#">Ambiente do Aluno</a></li>
                            <li><a href="#">Cadastre-se</a></li>
                            <li><a href="#">Validar Certificado</a></li>
                            <li><a href="#">Validar Declaração</a></li>
                            <li><a href="#">Central de Atendimento</a></li>
                        </ul>
                    </div>
                    <div className="items-footer-2">
                        <h2>Sobre Nós</h2>
                        <ul>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Política de Reembolso</a></li>
                        </ul>
                    </div>
                    <div className="items-footer-3">
                        <h2>Redes Sociais</h2>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="parceiros-footer">
                    <button>Precisa de Ajuda?</button>
                    <div className="imagens-footer">
                        <img src="/google-seguro.webp" alt="Google Seguro"/>
                        <img src="/abed.webp" alt="ABED"/>
                        <img src="/famec.png" alt="FAMEC"/>
                    </div>
                </div>

            </div>
            <div className="section-2-footer">
                extra
            </div>
            <div className="section-3-footer">
                footer
            </div>
        </div>
    );
}

export default SectionFooter;
