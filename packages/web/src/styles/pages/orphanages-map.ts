import styled from "styled-components";
import {Link} from "react-router-dom";

export const PageMap = styled.div`
    width: 100vw;
    height: 100vh;
    
    position: relative;
    display: flex;
    
    aside {
        width: 440px;
        background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
        padding: 80px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        header {
        
            h2 {
            font-size: 40px;
            font-weight: 800;
            line-height: 42px;
            margin-top: 64px;
        }
        
            p {
                line-height: 28px;
                margin-top: 24px;
            }
        }
        
        footer {
            display: flex;
            flex-direction: column;
            line-height: 24px;
            
            strong {
                font-weight: 800;
            }
        }
    }
    
    .leaflet-container {
        z-index: 5;
    }
`;

export const CreateOrphanage = styled(Link)`
    position: absolute;
    right: 40px;
    bottom: 40px;
    
    z-index: 10;
    
    width: 64px;
    height: 64px;
    background: #15C3D6;
    border-radius: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: background-color 0.2s;
    
    &:hover {
        background: #17D6EB;
    }
`;
