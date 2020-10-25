import styled from "styled-components";

export const PageDashboard = styled.div`
    min-height: 100vh;
    display: flex;
    
    main {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        
        flex: 1;
    }
`;

export const MapContainer = styled.div`
    margin-top: 64px;
    background: #FFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    margin-left: 96px;
    
    & + & {
        margin-left: 32px;
    }
    
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
`;
