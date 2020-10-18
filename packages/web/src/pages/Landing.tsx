import React from "react";

import {ContentWrapper, EnterApp, Location, PageLanding, ConfirmButton} from "../styles/pages/landing";
import logoImg from "../images/logo.svg";
import {FiArrowRight} from "react-icons/all";
import { useHistory } from "react-router-dom";


const Landing: React.FC = () => {
    const history = useHistory();

    function handleClickToLogin() {
        history.push("/signin");
    }

    return (
        <PageLanding>
            <ContentWrapper>
                <img src={logoImg} alt="Happy"/>

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>
                </main>

                <Location>
                    <strong>Mariana</strong>
                    <span>Minas Gerais</span>
                </Location>

                <EnterApp to="/app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </EnterApp>
                <ConfirmButton type="button" onClick={handleClickToLogin}>
                    Acesso restrito
                </ConfirmButton>
            </ContentWrapper>
        </PageLanding>
    );
};

export default Landing;
