import React, {FormEvent, useState} from "react";

import logoImg from "../images/logotipo.svg";

import {PageSignIn, ContentWrapper, Background, Location, InputBlock, SignInForm, ConfirmButton, EnterApp} from "../styles/pages/sign-in";
import {FiArrowLeft} from "react-icons/all";

import { useHistory } from "react-router-dom";
import {useAuth} from "../services/auth";

const SignIn = () => {
    const history = useHistory();
    const {signIn} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await signIn({email, password});
        history.push("/dashboard");
    }
    return (
        <PageSignIn>
            <Background>
                <img src={logoImg} alt="logo"/>
                <Location>
                    <strong>Mariana</strong>
                    <span>Minas Gerais</span>
                </Location>
            </Background>
            <ContentWrapper>
                <SignInForm onSubmit={handleSubmit}>
                    <h1>Fazer Login</h1>
                    <InputBlock>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" value={email} onChange={event => setEmail(event.target.value)} />
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </InputBlock>
                    <ConfirmButton type="submit">
                        Entrar
                    </ConfirmButton>
                </SignInForm>
            </ContentWrapper>
            <EnterApp to="/">
                <FiArrowLeft size={26} color="rgba(0, 0, 0, 0.6)" />
            </EnterApp>
        </PageSignIn>
    );
}

export default SignIn;
