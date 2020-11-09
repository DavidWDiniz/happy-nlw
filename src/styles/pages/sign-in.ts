import styled from "styled-components";
import {Link} from "react-router-dom";


export const PageSignIn = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Background = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img {
        width: 260px;
        height: 234px;
    }
    
    
     h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
     }
     
     @media(max-width: 720px) {
        display: none;
    }
`;

export const Location = styled.div`
    font-size: 24px;
    line-height: 34px;
    display: flex;
    flex-direction: column;
    
    strong {
        margin-top: 100px;
        text-align: center;
        font-weight: 800;
    }
    
    span {
        text-align: center;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 520px;
    height: 100%;
    
    background: #FFF;
`;

export const SignInForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 360px;
    
    h1 {
        margin-right: 167px;
        margin-bottom: 70px;
        color: #5C8599;
    }
    
`;

export const InputBlock = styled.div`
    & + & {
        margin-top: 24px;
    }
    
    label {
        display: flex;
        color: #8FA7B3;
        margin-bottom: 8px;
        line-height: 24px;
    }

    input {
        width: 360px;
        background: #F5F8FA;
        border: 1px solid #D3E2E5;
        border-radius: 20px;
        outline: none;
        color: #5C8599;
        height: 64px;
        padding: 0 16px;
    }
 
`;

export const ConfirmButton = styled.button`
    margin-top: 88px;
    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3CDC8C;
    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;
    outline: none;

    transition: background-color 0.2s;
    
    &:hover {
        background: #36CF82;
    }
`;

export const EnterApp = styled(Link)`
    position: absolute;
    right: 40px;
    top: 40px;
    
    width: 48px;
    height: 48px;
    background: #EBF2F5;

    border-radius: 16px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: background-color 0.2s;
    
    &:hover {
        background: #D3E2E5;
    }
`;
