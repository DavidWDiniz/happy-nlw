import styled from "styled-components";

import register from "../../images/register-success.svg";

export const PageRegister = styled.div`
    width: 100vw;
    height: 100vh;
    background: #37C77F;
    
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
    
    background: url(${register}) no-repeat 80% center;
    
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
    }
    
     @media(max-width: 720px) {
        background: none;
        align-items: center;
    }
`;

export const ConfirmButton = styled.button`
    margin-top: 64px;
    margin-left: 76px;
    width: 240px;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #31B272;

    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;
    outline: none;
  
    transition: background-color 0.2s;
    
    &:hover {
        background: #3BD689;
    }
`;
