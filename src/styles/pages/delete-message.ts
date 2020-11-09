import styled from "styled-components";

import imgBackground from "../../images/delete-page.svg";

export const PageRegister = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FF669D;

    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ContentWrapper = styled.div`
    position: relative;
    
    width: 100%;
    max-width: 1100px;
    
    height: 100%;
    max-height: 680px;
    
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    
    background: url(${imgBackground}) no-repeat 80% center;
    
    main {
        max-width: 392px;
        
        h1 {
            text-align: center;
            margin-top: 150px;
            font-size: 80px;
            font-weight: 800;
            line-height: 70px;
        }
        
        p {
            text-align: center;
            margin-top: 40px;
            font-size: 24px;
            line-height: 34px;
            font-weight: 600;
        }
        
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    
    @media(max-width: 720px) {
        background: none;
        align-items: center;
    }
`;

export const ConfirmButton = styled.button`
    margin-top: 64px;
    width: 180px;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #FFF;
    border-radius: 20px;
    color: #D6487B;
    font-weight: 800;
    outline: none;
  
    transition: background-color 0.2s;
    
    &:hover {
        background: #FFDADA;
    }
`;

export const CancelButton = styled.button`
    margin-top: 64px;
    width: 180px;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #D6487B;
    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;
    outline: none;
  
    transition: background-color 0.2s;
    
    &:hover {
        background: #f1508a;
    }
`;
