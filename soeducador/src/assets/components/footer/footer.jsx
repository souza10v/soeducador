import "./styles.scss";

function SectionFooter() {
    return (
        <div className="container-footer">
            <hr />
            <div className="section-1-footer">
                <div className="items-footer">
                    <div className="items-footer-1">
                        <h2>Para Você</h2>
                        <ul>
                            <li><a href="https://blog.soeducador.com.br/">Blog do SóEducador</a></li>
                            <li><a href="https://soeducador.com.br/app">Ambiente do Aluno</a></li>
                            <li><a href="https://soeducador.com.br/conta/novo">Cadastre-se</a></li>
                            <li><a href="https://soeducador.com.br/certificado">Validar Certificado</a></li>
                            <li><a href="https://soeducador.com.br/declaracao/validar">Validar Declaração</a></li>
                            <li><a href="https://soeducador.com.br/ajuda">Central de Atendimento</a></li>
                        </ul>
                    </div>
                    <div className="items-footer-2">
                        <h2>Sobre Nós</h2>
                        <ul>
                            <li><a href="https://soeducador.com.br/quem-somos">Quem Somos</a></li>
                            <li><a href="https://soeducador.com.br/termos-de-uso">Termos de uso</a></li>
                            <li><a href="https://soeducador.com.br/politica-de-privacidade">Política de Privacidade</a></li>
                            <li><a href="https://soeducador.com.br/politica-de-cancelamento-e-reembolso">Política de Reembolso</a></li>
                        </ul>
                    </div>
                    <div className="items-footer-3">
                        <h2>Redes Sociais</h2>
                        <ul>
                            <li><a href="https://facebook.com/soeducador" target="_blank">Facebook</a></li>
                            <li><a href="https://instagram.com/soeducador" target="_blank">Instagram</a></li>
                            <li><a href="https://soeducador.com.br/suporte/whatsapp" target="_blank">Whatsapp</a></li>
                        </ul>
                    </div>
                    <div className="parceiros-footer">
                        <button onClick={() => window.location.href = "/"}>Precisa de Ajuda?</button>
                        <div className="imagens-footer">
                            <img src="/google-seguro.webp" alt="Google Seguro" />
                            <img src="/abed.webp" alt="ABED" />
                            <img src="/famec.png" alt="FAMEC" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3-footer">
                <img src="/inci.webp" alt="INCI" />
                <p>COPYRIGHT ©2025. INCI - INSTITUTO NACIONAL DE APERFEIÇOAMENTO PROFISSIONAL - CNPJ: 36.692.668/0001-94</p>
            </div>
        </div>
    );
}

export default SectionFooter;
