import React from "react";
import { useHistory } from "react-router-dom";
import {ContentWrapper, ConfirmButton, PageRegister} from "../styles/pages/register-message";

const RegisterMessage = () => {
    const history = useHistory();
    function handleGoBackToMap() {
        history.push("/app");
    }
    return (
        <PageRegister>
            <ContentWrapper>
                <main>
                    <h1>Ebaaa!</h1>
                    <p>
                        O cadastro deu certo e foi enviado
                        ao administrador para ser aprovado.
                        Agora é só esperar :)
                    </p>
                    <ConfirmButton type="button" onClick={handleGoBackToMap}>
                        Voltar para o mapa
                    </ConfirmButton>
                </main>
            </ContentWrapper>
        </PageRegister>
    );
}

export default RegisterMessage;
