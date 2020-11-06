import styled from "styled-components";
import {Link} from "react-router-dom";

import landing from "../../images/landing.svg";

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    
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
    
    background: url(${landing}) no-repeat 80% center;
    
    main {
        max-width: 350px;
        
        h1 {
            font-size: 76px;
            font-weight: 900;
            line-height: 70px;
        }
        
        p {
            margin-top: 40px;
            font-size: 24px;
            line-height: 34px;
        }
    }
    
     @media(max-width: 720px) {
     
        align-items: center;
        background: none;
         
        main {
            h1 {
                display: none;
            }
            
            p {
                display: none;
            }
        }
    }
`;

export const Location = styled.div`
    position: absolute;
    right: 640px;
    top: 0;
    
    font-size: 24px;
    line-height: 34px;
    
    display: flex;
    flex-direction: column;
    
    text-align: left;
    
    strong {
        font-weight: 800;
    }
    
     @media(max-width: 720px) {
        display: none;
    }
`;

export const EnterApp = styled(Link)`
    position: absolute;
    right: 0;
    bottom: 0;
    
    width: 80px;
    height: 80px;
    background: #FFD666;
    
    border-radius: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: background-color 0.2s;
    
    &:hover {
        background: #96FEFF;
    }
    
    @media(max-width: 720px) {
        position: relative;
    }
`;

export const ConfirmButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    

    width: 240px;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #12D4E0;

    border-radius: 20px;
    color: #FFFFFF;
    font-weight: 800;
    outline: none;
  
    transition: background-color 0.2s;
    
    &:hover {
        background: #96FEFF;
        color: #15C3D6;
    }
    
    @media(max-width: 720px) {
        position: relative;
    }
`;
