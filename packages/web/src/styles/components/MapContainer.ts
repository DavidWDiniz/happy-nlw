import styled from "styled-components";
import {Map, MapProps} from "react-leaflet";

export const MapContent = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    margin-bottom: 32px;
    z-index: 1;
    
    margin-right: 32px;
    
    footer {
        position: relative;
        display: flex;
        padding: 20px 0;
        text-align: center;
        align-items: center;
        
        
        p {
            font-size: 24px;
            font-weight: 700;
            margin-left: 32px;
            line-height: 34px;
            color: #4D6F80;
            text-align: left;
        }
        
        div {
            display: flex;
            position: absolute;
            right: 32px;
            bottom: 12px;
            
            a {
                width: 48px;
                height: 48px;
            
                border: 0;
                outline: none;
                
              
                background: #EBF2F5;
                border-radius: 16px;
              
                cursor: pointer;
              
                transition: background-color 0.2s;
              
                display: flex;
                justify-content: center;
                align-items: center;
                
                &:hover {  
                    background: #dee4e7;
                }
                
                & + a {
                    margin-left: 8px;
                }
            }
        }
    }
    
    .leaflet-container {
        border-bottom: 1px solid #D3E2E5;
        border-radius: 20px;
    }
    
     @media(max-width: 720px) {
        
        footer {
            width: 300px;
            
            div {
                flex-direction: column;
                position: relative;
                bottom: 0;
                right: 8px;
                
                a {
                
                    & + a {
                        margin-left: 0;
                        margin-top: 8px;
                    }
                    
                }
                
            }
            
        }
    }
    
`;

export const MapStyled = styled(Map)<MapProps>`
    width: 535px;
    height: 300px;
    
    @media(max-width: 720px) {
        width: 300px;
        height: 220px;
    }
`;
